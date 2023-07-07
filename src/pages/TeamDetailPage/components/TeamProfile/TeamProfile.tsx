import { Loading } from '@components/Loading/Loading';

import { useGetTeam } from '@hooks/@query/team/useGetTeam';
import { useGetTeamStandings } from '@hooks/@query/team/useGetTeamStandings';

import {
    DetailSection,
    LogoSection,
    ProfileContainer,
    StandingSection,
    TeamName,
} from '@pages/TeamDetailPage/components/TeamProfile/TeamProfile.styles';

interface TeamProfileProps {
    teamId: number;
}

export const TeamProfile = ({ teamId }: TeamProfileProps) => {
    const { isLoading: isLoadingTeam, data: team } = useGetTeam(teamId);
    const { isLoading: isLoadingStandings, data: standings } = useGetTeamStandings(teamId);

    return (
        <ProfileContainer>
            {isLoadingTeam || !team ? (
                <Loading size={60} />
            ) : (
                <>
                    <LogoSection>
                        <img src={team.imageUrl} alt={team.abbreviation} />
                    </LogoSection>
                </>
            )}
            {isLoadingStandings || !standings || !team ? (
                <Loading size={60} />
            ) : (
                <DetailSection>
                    <TeamName>{team.name}</TeamName>
                    <StandingSection>
                        <span>
                            W-L: {standings[0].wins}-{standings[0].losses}
                        </span>
                        <span>|</span>
                        <span>
                            #{standings[0].divisionRank} in {team.division!.shortName}
                        </span>
                    </StandingSection>
                </DetailSection>
            )}
        </ProfileContainer>
    );
};
