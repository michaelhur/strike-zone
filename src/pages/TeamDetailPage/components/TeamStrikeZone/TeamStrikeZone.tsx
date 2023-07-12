import { SectionTitle } from '@components/Layout/Layout.styles';
import { Loading } from '@components/Loading/Loading';
import StrikeZone from '@components/StrikeZone/StrikeZone';
import { StrikeZoneList, StrikeZoneRow } from '@components/StrikeZone/StrikeZone.styles';

import { useGetAtbatListByTeam } from '@hooks/@query/team/useGetAtbatListByTeam';
import { useGetLatestAtbatListByTeam } from '@hooks/@query/team/useGetLatestAtbatListByTeam';
import { useAtbatBySide } from '@hooks/pitch/useAtbatBySide';

import { TeamStrikeZoneContainer } from '@pages/TeamDetailPage/components/TeamStrikeZone/TeamStrikeZone.styles';

interface TeamStrikeZoneProps {
    teamId: number;
    latest: boolean;
}

export const TeamStrikeZone = ({ teamId, latest }: TeamStrikeZoneProps) => {
    const { isLoading, data } = latest ? useGetLatestAtbatListByTeam(teamId) : useGetAtbatListByTeam(teamId);
    const [pitchingData, battingData] = isLoading || !data ? [[], []] : useAtbatBySide(data, teamId);
    const sectionTitle = latest ? 'Latest Games' : 'Season';

    return (
        <TeamStrikeZoneContainer>
            <SectionTitle>{sectionTitle}</SectionTitle>
            <StrikeZoneRow>
                {isLoading ? (
                    <Loading size={60} />
                ) : (
                    <>
                        <StrikeZoneList>
                            <StrikeZone
                                atbats={pitchingData!}
                                plotType={'zone'}
                                zoneLabel={'Pitching (LHP)'}
                                radius={24}
                                outcomeType={'BallsAndStrikes'}
                                pitchHand={'L'}
                            />
                            <StrikeZone
                                atbats={pitchingData!}
                                plotType={'zone'}
                                zoneLabel={'Pitching (RHP)'}
                                radius={24}
                                outcomeType={'BallsAndStrikes'}
                                pitchHand={'R'}
                            />
                        </StrikeZoneList>
                        <StrikeZoneList>
                            <StrikeZone
                                atbats={battingData!}
                                plotType={'zone'}
                                zoneLabel={'Batting (LHB)'}
                                radius={24}
                                outcomeType={'BallsAndStrikes'}
                                batSide={'L'}
                            />
                            <StrikeZone
                                atbats={battingData!}
                                plotType={'zone'}
                                zoneLabel={'Batting (RHB)'}
                                radius={24}
                                outcomeType={'BallsAndStrikes'}
                                batSide={'R'}
                            />
                        </StrikeZoneList>
                    </>
                )}
            </StrikeZoneRow>
        </TeamStrikeZoneContainer>
    );
};
