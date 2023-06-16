import { GameList } from '@components/GameList/GameList';
import { ContainerTitleWrapper, PageSectionContainer } from '@components/Layout/Layout';
import { Loading } from '@components/Loading/Loading';

import { useGetGameList } from '@hooks/@query/game/useGetGameList';

import { GameListSectionContainer, GameListWrapper } from '@pages/Fixture/components/GameListSection.styles';

import { date_to_YYYYMMDD } from '@utils/date';

interface GameListSectionProps {
    fixtureDate: Date | undefined;
    sectionLabel?: string;
}

export const GameListSection = ({ fixtureDate, sectionLabel }: GameListSectionProps) => {
    const YYYYMMDD = date_to_YYYYMMDD(fixtureDate);
    const queryString = `date=${YYYYMMDD}`;
    const { isLoading, data: gameList } = YYYYMMDD ? useGetGameList(queryString) : { isLoading: false, data: [] };

    if (isLoading) return <Loading size={40} />;

    return (
        <PageSectionContainer>
            <ContainerTitleWrapper>
                <h2>{sectionLabel ? sectionLabel : YYYYMMDD || '날짜가 선택되지 않았습니다'}</h2>
            </ContainerTitleWrapper>
            {fixtureDate && (
                <GameListWrapper>
                    <GameList games={gameList!} itemViewType={'LIST'} cardCount={2} />
                </GameListWrapper>
            )}
        </PageSectionContainer>
    );
};
