import { GameList } from '@components/GameListSection/components/GameList/GameList';
import { Loading } from '@components/Loading/Loading';

import { useGetGameListByUmpire } from '@hooks/@query/umpire/useGetGameListByUmpire';

import { UmpireGameListContainer } from '@pages/UmpireDetailPage/components/UmpireGameList/UmpireGameList.styles';

interface UmpireGameListProps {
    id: number;
}

export const UmpireGameList = ({ id }: UmpireGameListProps) => {
    const { isLoading, data: games } = useGetGameListByUmpire(id);

    return (
        <UmpireGameListContainer>
            {isLoading || !games ? (
                <Loading size={60} />
            ) : (
                <GameList games={games} itemViewType={'LIST'} cardCount={1} />
            )}
        </UmpireGameListContainer>
    );
};
