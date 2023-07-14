import { GameList } from '@components/GameListSection/components/GameList/GameList';
import { SectionTitleWrapper } from '@components/Layout/Layout.styles';
import { Loading } from '@components/Loading/Loading';

import { useGetGameByPlayerSlug } from '@hooks/@query/player/useGetGameByPlayerSlug';
import { useGetLatestGameByPlayerSlug } from '@hooks/@query/player/useGetLatestGameByPlayerSlug';
import { useGetPlayerStats } from '@hooks/@query/player/useGetPlayerStats';

import { PlayerGameListContainer } from '@pages/PlayerDetailPage/components/PlayerGameList/PlayerGameList.styles';

interface PlayerGameListProps {
    slug: string;
}

export const PlayerGameList = ({ slug }: PlayerGameListProps) => {
    const { isLoading, data } = useGetPlayerStats(slug!);
    const isPitcher = data?.positionCode === 'P' || data?.positionCode === 'TWP';
    const { isLoading: isLoadingGames, data: games } = useGetLatestGameByPlayerSlug(slug!, isPitcher!);

    return (
        <PlayerGameListContainer>
            <SectionTitleWrapper>
                <h3>최근 5경기</h3>
            </SectionTitleWrapper>
            {isLoading || isLoadingGames || !games ? (
                <Loading size={60} />
            ) : (
                <GameList games={games!} itemViewType={'LIST'} cardCount={1} />
            )}
        </PlayerGameListContainer>
    );
};
