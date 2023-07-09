import GameItem from '@components/GameItem/GameItem';
import { GameListContainer } from '@components/GameListSection/components/GameList/GameList.styles';

import { itemViewType } from '@recoils/fixture/atom';

import { Game } from '@typings/game';

export interface GameListProps {
    games: Game[];
    itemViewType: itemViewType;
}

export const GameList = ({ games, itemViewType }: GameListProps) => {
    return (
        <GameListContainer>
            {games.length
                ? games.map((game) => {
                      return <GameItem key={game.id} game={game} itemViewType={itemViewType} />;
                  })
                : `No Games Played`}
        </GameListContainer>
    );
};
