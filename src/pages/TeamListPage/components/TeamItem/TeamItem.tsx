import { TeamImage, TeamListItem, TeamName } from '@pages/TeamListPage/components/TeamItem/TeamItem.styles';

import { Team } from '@typings/team';

interface TeamItemProps {
    team: Team;
    onClickTeam: (id: number) => void;
}

export const TeamItem = ({ team, onClickTeam }: TeamItemProps) => {
    const { id, imageUrl, abbreviation, franchiseName, teamName } = team;
    const onClickTeamItem = () => onClickTeam(id);

    return (
        <TeamListItem key={id} onClick={onClickTeamItem}>
            <TeamImage>
                <img src={imageUrl} alt={abbreviation} />
            </TeamImage>
            <TeamName>{franchiseName}</TeamName>
            <TeamName>{teamName}</TeamName>
        </TeamListItem>
    );
};
