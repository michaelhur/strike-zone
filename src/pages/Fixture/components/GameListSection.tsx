import { GameList } from '@components/GameList/GameList';
import { ContainerTitleWrapper } from '@components/Layout/Layout';
import { Loading } from '@components/Loading/Loading';

import { useGetGameList } from '@hooks/@query/game/useGetGameList';

import { GameListSectionContainer, GameListWrapper } from '@pages/Fixture/components/GameListSection.styles';

import { date_to_YYYYMMDD } from '@utils/date';

interface GameListSectionProps {
    fixtureDate: Date | undefined;
}

export const GameListSection = ({ fixtureDate }: GameListSectionProps) => {
    const YYYYMMDD = date_to_YYYYMMDD(fixtureDate);
    const queryString = `date=${YYYYMMDD}`;
    const { isLoading, data: gameList } = YYYYMMDD ? useGetGameList(queryString) : { isLoading: false, data: [] };

    if (isLoading) return <Loading size={40} />;

    return (
        <GameListSectionContainer>
            <ContainerTitleWrapper>
                <h2>{YYYYMMDD || '날짜가 선택되지 않았습니다'}</h2>
            </ContainerTitleWrapper>
            {fixtureDate && (
                <GameListWrapper>
                    <GameList games={gameList!} itemViewType={'LIST'} cardCount={2} />
                </GameListWrapper>
            )}
        </GameListSectionContainer>
    );
};
