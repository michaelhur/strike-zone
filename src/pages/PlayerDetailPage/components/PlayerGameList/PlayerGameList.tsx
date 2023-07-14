import { useEffect, useState } from 'react';

import { GameList } from '@components/GameListSection/components/GameList/GameList';
import { SectionTitleWrapper } from '@components/Layout/Layout.styles';
import { Loading } from '@components/Loading/Loading';

import { useGetLatestGameByPlayerSlug } from '@hooks/@query/player/useGetLatestGameByPlayerSlug';
import { useGetPlayer } from '@hooks/@query/player/useGetPlayer';

import { PlayerGameListContainer } from '@pages/PlayerDetailPage/components/PlayerGameList/PlayerGameList.styles';

interface PlayerGameListProps {
    slug: string;
}

export const PlayerGameList = ({ slug }: PlayerGameListProps) => {
    const [isPitcher, setIsPitcher] = useState<boolean | null>(null);

    const { isLoading: isLoadingPlayer, data: player } = useGetPlayer(slug!);
    const { isLoading: isLoadingGames, data: games } = useGetLatestGameByPlayerSlug(slug!, isPitcher);

    useEffect(() => {
        if (!isLoadingPlayer && player) setIsPitcher(player.positionType === 'Pitcher');
    }, [isLoadingPlayer, player]);

    return (
        <PlayerGameListContainer>
            <SectionTitleWrapper>
                <h3>최근 5경기</h3>
            </SectionTitleWrapper>
            {isLoadingPlayer || isLoadingGames || !games ? (
                <Loading size={60} />
            ) : (
                <GameList games={games!} itemViewType={'LIST'} cardCount={1} />
            )}
        </PlayerGameListContainer>
    );
};
