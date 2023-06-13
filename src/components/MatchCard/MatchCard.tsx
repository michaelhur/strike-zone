import { Game } from '@typings/game';
import { Team } from '@typings/team';

interface MatchCardProps {
    game: Game;
    home: Team;
    away: Team;
}

export const MatchCard = ({ game, home, away }: MatchCardProps) => {
    return <div>MatchCard</div>;
};
