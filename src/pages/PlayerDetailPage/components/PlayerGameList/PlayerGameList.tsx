import styled from '@emotion/styled';

import { GameList } from '@components/GameListSection/components/GameList/GameList';
import { FlexColumnContainer, SectionTitleWrapper } from '@components/Layout/Layout';
import { Loading } from '@components/Loading/Loading';

import { useGetGameByPlayerSlug } from '@hooks/@query/player/useGetGameByPlayerSlug';

import { PlayerGameListContainer } from '@pages/PlayerDetailPage/components/PlayerGameList/PlayerGameList.styles';

interface PlayerGameListProps {
    slug: string;
}

export const PlayerGameList = ({ slug }: PlayerGameListProps) => {
    const { isLoading: isLoadingGames, data: games } = useGetGameByPlayerSlug(slug!, 1);

    return (
        <PlayerGameListContainer>
            <SectionTitleWrapper>
                <h3>Last 5 Games</h3>
            </SectionTitleWrapper>
            {isLoadingGames ? <Loading size={60} /> : <GameList games={games!} itemViewType={'LIST'} cardCount={1} />}
        </PlayerGameListContainer>
    );
};
