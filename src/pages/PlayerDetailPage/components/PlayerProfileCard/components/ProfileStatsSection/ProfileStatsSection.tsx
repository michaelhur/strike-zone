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

const PitchingStatsSection = ({ pitchingStats }: { pitchingStats: PitchingStats }) => {
    const {
        baseOnBalls,
        balls,
        era,
        gamesPlayed,
        holds,
        inningsPitched,
        losses,
        outs,
        saves,
        strikes,
        strikeOuts,
        whip,
        wins,
    } = pitchingStats;
    return (
        <>
            <StatsRow>
                <StatsCell>
                    <h3>{gamesPlayed}</h3>
                    <span>Games Played</span>
                </StatsCell>
                <StatsCell>
                    <h3>
                        {wins}-{losses}
                    </h3>
                    <span>W-L</span>
                </StatsCell>
                <StatsCell>
                    <h3>{inningsPitched}</h3>
                    <span>Innings</span>
                </StatsCell>
            </StatsRow>
            <StatsRow>
                <StatsCell>
                    <h3>{strikeOuts}</h3>
                    <span>Strike Outs</span>
                </StatsCell>
                <StatsCell>
                    <h3>{baseOnBalls}</h3>
                    <span>Base on Balls</span>
                </StatsCell>
                <StatsCell>
                    <h3>{era}</h3>
                    <span>ERA</span>
                </StatsCell>
            </StatsRow>
        </>
    );
};

const BattingStatsSection = ({ battingStats }: { battingStats: BattingStats }) => {
    return (
        <>
            <StatsRow></StatsRow>
            <StatsRow></StatsRow>
        </>
    );
};

export const ProfileStatsSection = ({ slug }: ProfileStatsSectionProps) => {
    const { isLoading, data } = useGetPlayerStats(slug!);

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
                    ((data.positionCode === 'P' || data.positionCode === 'TWP') && data.pitchingStats ? (
                        <PitchingStatsSection pitchingStats={data.pitchingStats} />
                    ) : (
                        <BattingStatsSection battingStats={data.battingStats} />
                    ))
                )}
            </StatsSectionDetailWrap>
        </ProfileStatsSectionContainer>
    );
};
