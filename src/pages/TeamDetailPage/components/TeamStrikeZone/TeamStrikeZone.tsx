import { SectionTitle, SectionTitleWrapper } from '@components/Layout/Layout.styles';
import { Loading } from '@components/Loading/Loading';
import StrikeZone from '@components/StrikeZone/StrikeZone';
import { StrikeZoneList, StrikeZoneRow } from '@components/StrikeZone/StrikeZone.styles';

import { useGetAtbatListByTeam } from '@hooks/@query/team/useGetAtbatListByTeam';
import { useGetLatestAtbatListByTeam } from '@hooks/@query/team/useGetLatestAtbatListByTeam';
import { useAtbatBySide } from '@hooks/pitch/useAtbatBySide';

import { TeamStrikeZoneContainer } from '@pages/TeamDetailPage/components/TeamStrikeZone/TeamStrikeZone.styles';

import { OutcomeType, PlotTypes } from '@typings/atbat';

interface TeamStrikeZoneProps {
    teamId: number;
    latest: boolean;
}

export const TeamStrikeZone = ({ teamId, latest }: TeamStrikeZoneProps) => {
    const { isLoading, data } = latest ? useGetLatestAtbatListByTeam(teamId) : useGetAtbatListByTeam(teamId);
    const [pitchingData, battingData] = isLoading || !data ? [[], []] : useAtbatBySide(data, teamId);
    const plotType: PlotTypes = latest ? 'zone' : 'heatmap';
    const outcomeType: OutcomeType = latest ? 'BallsAndStrikes' : 'CalledStrike';
    const sectionTitle = latest ? '최근 5 경기' : '시즌 전체';

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
                                plotType={plotType}
                                zoneLabel={'투구 (좌완)'}
                                radius={24}
                                outcomeType={outcomeType}
                                pitchHand={'L'}
                            />
                            <StrikeZone
                                atbats={pitchingData!}
                                plotType={plotType}
                                zoneLabel={'투구 (우완)'}
                                radius={24}
                                outcomeType={outcomeType}
                                pitchHand={'R'}
                            />
                        </StrikeZoneList>
                        <StrikeZoneList>
                            <StrikeZone
                                atbats={battingData!}
                                plotType={plotType}
                                zoneLabel={'타격 (좌타)'}
                                radius={24}
                                outcomeType={outcomeType}
                                batSide={'L'}
                            />
                            <StrikeZone
                                atbats={battingData!}
                                plotType={plotType}
                                zoneLabel={'타격 (우타)'}
                                radius={24}
                                outcomeType={outcomeType}
                                batSide={'R'}
                            />
                        </StrikeZoneList>
                    </>
                )}
            </StrikeZoneRow>
        </TeamStrikeZoneContainer>
    );
};
