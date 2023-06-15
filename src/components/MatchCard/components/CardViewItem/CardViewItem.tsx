import { useNavigate } from 'react-router-dom';

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
} from '@components/MatchCard/components/CardViewItem/CardViewItem.styles';

import { Game } from '@typings/game';
import { Team } from '@typings/team';

export interface MatchCardProps {
    game: Game;
}

const CardViewTeamSection = ({ team, homeOrAway }: { team: Team; homeOrAway: 'Home' | 'Away' }) => {
    const { franchiseName, teamName, abbreviation, imageUrl } = team;

    return (
        <CardViewTeamSectionContainer>
            <CardViewTeamImage>
                <img src={imageUrl} alt={abbreviation} loading="lazy" />
            </CardViewTeamImage>
            <CardViewTeamName>{franchiseName}</CardViewTeamName>
            <CardViewTeamName>{teamName}</CardViewTeamName>
            <CardViewHomeOrAway>{homeOrAway}</CardViewHomeOrAway>
        </CardViewTeamSectionContainer>
    );
};
[];
const CardViewScoreSection = ({
    isFinal,
    homeScore,
    awayScore,
}: {
    isFinal: boolean;
    homeScore: number | null;
    awayScore: number | null;
}) => {
    const gameStatus = isFinal ? 'Final' : 'Postponed';

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

export const CardViewItem = ({ game }: MatchCardProps) => {
    const navigate = useNavigate();
    const { id, slug, date, home, away, isFinal, homeScore, awayScore } = game;
    const onClickMatchCard = () => {
        if (isFinal) navigate(`/games/${slug}`);
        else alert('취소된 경기의 정보는 열람할 수 없습니다.');
    };

    return (
        <CardViewContainer key={id} onClick={onClickMatchCard}>
            <CardViewTopSection>
                <h3>{home!.venue}</h3>
                <span>{date}</span>
            </CardViewTopSection>
            <CardViewMatchupSection>
                <CardViewTeamSection team={home!} homeOrAway={'Home'} />
                <CardViewScoreSection isFinal={isFinal!} homeScore={homeScore} awayScore={awayScore} />
                <CardViewTeamSection team={away!} homeOrAway={'Away'} />
            </CardViewMatchupSection>
        </CardViewContainer>
    );
};
