import { Loading } from '@components/Loading/Loading';

import { useGetPlayerStats } from '@hooks/@query/player/useGetPlayerStats';

import {
    ProfileStatsSectionContainer,
    StatsCell,
    StatsRow,
    StatsSectionDetailWrap,
    StatsSectionTitleWrap,
} from '@pages/PlayerDetailPage/components/PlayerProfileCard/components/ProfileStatsSection/ProfileStatsSection.styles';

import { BattingStats, PitchingStats } from '@typings/player';

interface ProfileStatsSectionProps {
    slug: string;
}

const StatsItem = ({ label, value }: { label: string; value: number | string }) => {
    return (
        <StatsCell>
            <h3>{value}</h3>
            <span>{label}</span>
        </StatsCell>
    );
};

const PitchingStatsSection = ({ pitchingStats }: { pitchingStats: PitchingStats }) => {
    const { baseOnBalls, balls, era, gamesPlayed, inningsPitched, losses, strikes, strikeOuts, wins } = pitchingStats;
    return (
        <>
            <StatsRow>
                <StatsItem label="Games" value={gamesPlayed} />
                <StatsItem label="W-L" value={`${wins}-${losses}`} />
                <StatsItem label="Innings" value={inningsPitched} />
            </StatsRow>
            <StatsRow>
                <StatsItem label="SO" value={strikeOuts} />
                <StatsItem label="BB" value={baseOnBalls} />
                <StatsItem label="ERA" value={era} />
            </StatsRow>
        </>
    );
};

const BattingStatsSection = ({ battingStats }: { battingStats: BattingStats }) => {
    const { avg, baseOnBalls, gamesPlayed, hits, homeRuns, strikeOuts } = battingStats;
    return (
        <>
            <StatsRow>
                <StatsItem label="Games" value={gamesPlayed} />
                <StatsItem label="Avg" value={avg} />
                <StatsItem label="Hits" value={hits} />
            </StatsRow>
            <StatsRow>
                <StatsItem label="SO" value={strikeOuts} />
                <StatsItem label="BB" value={baseOnBalls} />
                <StatsItem label="HR" value={homeRuns} />
            </StatsRow>
        </>
    );
};

export const ProfileStatsSection = ({ slug }: ProfileStatsSectionProps) => {
    const { isLoading, data } = useGetPlayerStats(slug!);
    const isPitcher = data?.positionCode === 'P' || data?.positionCode === 'TWP';

    return (
        <ProfileStatsSectionContainer>
            <StatsSectionTitleWrap>
                <h4>2023 Season</h4>
            </StatsSectionTitleWrap>
            <StatsSectionDetailWrap>
                {isLoading ? (
                    <Loading size={60} />
                ) : (
                    data &&
                    (isPitcher ? (
                        <PitchingStatsSection pitchingStats={data.pitchingStats} />
                    ) : (
                        <BattingStatsSection battingStats={data.battingStats} />
                    ))
                )}
            </StatsSectionDetailWrap>
        </ProfileStatsSectionContainer>
    );
};
