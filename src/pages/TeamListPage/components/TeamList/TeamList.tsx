import { TeamItem } from '@pages/TeamListPage/components/TeamItem/TeamItem';
import { TeamListContainer } from '@pages/TeamListPage/components/TeamList/TeamList.styles';

import { Team } from '@typings/team';

interface TeamListProps {
    teams: Team[];
    onClickTeam: (id: number) => void;
}

export const TeamList = ({ teams, onClickTeam }: TeamListProps) => {
    return (
        <TeamListContainer>
            {teams.map((team) => {
                return <TeamItem key={team.id} team={team} onClickTeam={onClickTeam} />;
            })}
        </TeamListContainer>
    );
};
