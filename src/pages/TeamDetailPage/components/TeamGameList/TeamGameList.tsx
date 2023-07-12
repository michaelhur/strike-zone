import { GameList } from '@components/GameListSection/components/GameList/GameList';
import { SectionTitle } from '@components/Layout/Layout';
import { Loading } from '@components/Loading/Loading';

import { useGetGameListByTeam } from '@hooks/@query/team/useGetGameListByTeam';

import { TeamGameListContainer } from '@pages/TeamDetailPage/components/TeamGameList/TeamGameList.styles';

interface TeamLatestGameListProps {
    teamId: number;
}

export const TeamGameList = ({ teamId }: TeamLatestGameListProps) => {
    const { isLoading, data } = useGetGameListByTeam(teamId);

    return (
        <TeamGameListContainer>
            <SectionTitle>Latest Games</SectionTitle>
            {isLoading ? <Loading size={60} /> : <GameList games={data!} itemViewType={'LIST'} cardCount={1} />}
        </TeamGameListContainer>
    );
};
