import { useNavigate } from 'react-router-dom';

import { gameList } from '@mocks/data/game';

import {
    CardContainer,
    CardMatchupSection,
    CardTopSection,
    GameStatus,
    HomeOrAway,
    Score,
    ScoreLine,
    ScoreSectionContainer,
    TeamImage,
    TeamName,
    TeamSectionContainer,
} from '@components/MatchCard/MatchCard.styles';

import { Game } from '@typings/game';
import { Team } from '@typings/team';

interface MatchCardProps {
    game: Game;
}

const TeamSection = ({ team, homeOrAway }: { team: Team; homeOrAway: 'Home' | 'Away' }) => {
    const { franchiseName, teamName, abbreviation, imageUrl } = team;

    return (
        <TeamSectionContainer>
            <TeamImage>
                <img src={imageUrl} alt={abbreviation} />
            </TeamImage>
            <TeamName>{franchiseName}</TeamName>
            <TeamName>{teamName}</TeamName>
            <HomeOrAway>{homeOrAway}</HomeOrAway>
        </TeamSectionContainer>
    );
};

const ScoreSection = ({
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
        <ScoreSectionContainer>
            {isFinal && (
                <ScoreLine>
                    <Score>{homeScore}</Score>
                    <Score>:</Score>
                    <Score>{awayScore}</Score>
                </ScoreLine>
            )}
            <GameStatus>{gameStatus}</GameStatus>
        </ScoreSectionContainer>
    );
};

export const MatchCard = ({ game }: MatchCardProps) => {
    const navigate = useNavigate();

    const { id, slug, date, home, away, isFinal, homeScore, awayScore } = game;
    const onClickMatchCard = () => navigate(`/games/${slug}`);

    return (
        <CardContainer key={id} onClick={onClickMatchCard}>
            <CardTopSection>
                <h3>{home!.venue}</h3>
                <span>{date}</span>
            </CardTopSection>
            <CardMatchupSection>
                <TeamSection team={home!} homeOrAway={'Home'} />
                <ScoreSection isFinal={isFinal!} homeScore={homeScore} awayScore={awayScore} />
                <TeamSection team={away!} homeOrAway={'Away'} />
            </CardMatchupSection>
        </CardContainer>
    );
};
