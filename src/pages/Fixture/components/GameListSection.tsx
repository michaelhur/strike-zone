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
    const { isLoading, data: gameList } = useGetGameList(`date=${YYYYMMDD}`);

    return (
        <GameListSectionContainer>
            <ContainerTitleWrapper>
                <h2>{YYYYMMDD}</h2>
            </ContainerTitleWrapper>
            <GameListWrapper>
                {isLoading ? <Loading size={40} /> : <GameList games={gameList!} itemViewType={'CARD'} cardCount={2} />}
            </GameListWrapper>
        </GameListSectionContainer>
    );
};
