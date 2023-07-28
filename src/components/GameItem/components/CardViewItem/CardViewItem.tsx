import { ViewItemProps } from '@components/GameItem/GameItem';
import {
    CardViewContainer,
    CardViewGameStatus,
    CardViewHomeOrAway,
    CardViewMatchupSection,
    CardViewScore,
    CardViewScoreLine,
    CardViewScoreSectionContainer,
    CardViewTeamImage,
    CardViewTeamName,
    CardViewTeamSectionContainer,
    CardViewTopSection,
} from '@components/GameItem/components/CardViewItem/CardViewItem.styles';

import { Team } from '@typings/team';

import { YYYYMMDD_to_locale } from '@utils/date';

const CardViewTeamSection = ({ team, homeOrAway }: { team: Team; homeOrAway: 'Home' | 'Away' }) => {
    const { franchiseName, teamName, abbreviation, imageUrl } = team;
    const side = homeOrAway === 'Home' ? '홈' : '원정';

    return (
        <CardViewTeamSectionContainer>
            <CardViewTeamImage>
                <img src={imageUrl} alt={abbreviation} />
            </CardViewTeamImage>
            <CardViewTeamName>{franchiseName}</CardViewTeamName>
            <CardViewTeamName>{teamName}</CardViewTeamName>
            <CardViewHomeOrAway>{side}</CardViewHomeOrAway>
        </CardViewTeamSectionContainer>
    );
};

const CardViewScoreSection = ({
    isFinal,
    homeScore,
    awayScore,
}: {
    isFinal: boolean;
    homeScore: number | null;
    awayScore: number | null;
}) => {
    const gameStatus = isFinal ? '종료' : '취소';

    return (
        <CardViewScoreSectionContainer>
            {isFinal && (
                <CardViewScoreLine>
                    <CardViewScore>{homeScore}</CardViewScore>
                    <CardViewScore>:</CardViewScore>
                    <CardViewScore>{awayScore}</CardViewScore>
                </CardViewScoreLine>
            )}
            <CardViewGameStatus>{gameStatus}</CardViewGameStatus>
        </CardViewScoreSectionContainer>
    );
};

export const CardViewItem = ({ game, onClickItem, cardCount }: ViewItemProps) => {
    const { id, date, home, away, isFinal, homeScore, awayScore } = game;
    const dateStr = YYYYMMDD_to_locale(date);

    return (
        <CardViewContainer key={id} onClick={onClickItem} cardCount={cardCount}>
            <CardViewTopSection>
                <h3>{home!.venue}</h3>
                <span>{dateStr}</span>
            </CardViewTopSection>
            <CardViewMatchupSection>
                <CardViewTeamSection team={home!} homeOrAway={'Home'} />
                <CardViewScoreSection isFinal={isFinal!} homeScore={homeScore} awayScore={awayScore} />
                <CardViewTeamSection team={away!} homeOrAway={'Away'} />
            </CardViewMatchupSection>
        </CardViewContainer>
    );
};
