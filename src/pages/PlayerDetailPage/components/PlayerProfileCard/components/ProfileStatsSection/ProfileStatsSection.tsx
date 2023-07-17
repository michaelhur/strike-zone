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
    const { baseOnBalls, era, gamesPlayed, inningsPitched, losses, strikeOuts, wins } = pitchingStats;
    return (
        <>
            <StatsRow>
                <StatsItem label="경기" value={gamesPlayed} />
                <StatsItem label="승-패" value={`${wins}-${losses}`} />
                <StatsItem label="이닝" value={inningsPitched} />
            </StatsRow>
            <StatsRow>
                <StatsItem label="삼진" value={strikeOuts} />
                <StatsItem label="볼넷" value={baseOnBalls} />
                <StatsItem label="평균자책점" value={era} />
            </StatsRow>
        </>
    );
};

const BattingStatsSection = ({ battingStats }: { battingStats: BattingStats }) => {
    const { avg, baseOnBalls, gamesPlayed, hits, homeRuns, strikeOuts } = battingStats;
    return (
        <>
            <StatsRow>
                <StatsItem label="경기" value={gamesPlayed} />
                <StatsItem label="타율" value={avg} />
                <StatsItem label="안타" value={hits} />
            </StatsRow>
            <StatsRow>
                <StatsItem label="삼진" value={strikeOuts} />
                <StatsItem label="볼넷" value={baseOnBalls} />
                <StatsItem label="홈런" value={homeRuns} />
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
                <h4>2023 시즌</h4>
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
