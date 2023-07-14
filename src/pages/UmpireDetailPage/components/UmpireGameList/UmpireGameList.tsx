import { GameList } from '@components/GameListSection/components/GameList/GameList';
import { Loading } from '@components/Loading/Loading';

import { useGetLatestGameListByUmpire } from '@hooks/@query/umpire/useGetLatestGameListByUmpire';

import { UmpireGameListContainer } from '@pages/UmpireDetailPage/components/UmpireGameList/UmpireGameList.styles';

interface UmpireGameListProps {
    id: number;
}

export const UmpireGameList = ({ id }: UmpireGameListProps) => {
    const { isLoading, data: games } = useGetLatestGameListByUmpire(id);

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
