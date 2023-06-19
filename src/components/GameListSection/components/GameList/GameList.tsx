import GameItem from '@components/GameCard/GameItem';
import { GameListContainer } from '@components/GameListSection/components/GameList/GameList.styles';

import { itemViewType } from '@recoils/fixture/atom';

import { Game } from '@typings/game';

interface GameListProps {
    games: Game[];
    itemViewType: itemViewType;
    cardCount: number;
}

export const GameList = ({ games, itemViewType, cardCount }: GameListProps) => {
    return (
        <GameListContainer>
            {games.length
                ? games.map((game) => {
                      return <GameItem key={game.id} game={game} itemViewType={itemViewType} cardCount={cardCount} />;
                  })
                : `No Games Played on `}
        </GameListContainer>
    );
};
