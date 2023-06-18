import { GameList } from '@components/GameList/GameList';
import { PageSectionContainer, SectionTitleWrapper } from '@components/Layout/Layout';
import { Loading } from '@components/Loading/Loading';

import { useGetGameList } from '@hooks/@query/game/useGetGameList';

import { GameListWrapper } from '@pages/Fixture/components/GameListSection/GameListSection.styles';

interface GameListSectionProps {
    fixtureDate: string;
    sectionLabel?: string;
}

export const GameListSection = ({ fixtureDate, sectionLabel }: GameListSectionProps) => {
    const { isLoading, data: gameList } = fixtureDate
        ? useGetGameList(`date=${fixtureDate}`)
        : { isLoading: false, data: [] };

    if (isLoading) return <Loading size={40} />;

    return (
        <PageSectionContainer>
            <SectionTitleWrapper>
                <h2>{sectionLabel ? sectionLabel : fixtureDate || '날짜가 선택되지 않았습니다'}</h2>
            </SectionTitleWrapper>
            {fixtureDate && (
                <GameListWrapper>
                    <GameList games={gameList!} itemViewType={'LIST'} cardCount={2} />
                </GameListWrapper>
            )}
        </PageSectionContainer>
    );
};
