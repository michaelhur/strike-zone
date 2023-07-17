import { GameList } from '@components/GameListSection/components/GameList/GameList';
import { SectionTitle } from '@components/Layout/Layout.styles';
import { Loading } from '@components/Loading/Loading';

import { useGetLatestGameListByTeam } from '@hooks/@query/team/useGetLatestGameListByTeam';

import { TeamGameListContainer } from '@pages/TeamDetailPage/components/TeamGameList/TeamGameList.styles';

interface TeamLatestGameListProps {
    teamId: number;
}

export const TeamGameList = ({ teamId }: TeamLatestGameListProps) => {
    const { isLoading, data } = useGetLatestGameListByTeam(teamId);

    return (
        <TeamGameListContainer>
            <SectionTitle>최근 5경기</SectionTitle>
            {isLoading ? <Loading size={60} /> : <GameList games={data!} itemViewType={'LIST'} cardCount={1} />}
        </TeamGameListContainer>
    );
};
