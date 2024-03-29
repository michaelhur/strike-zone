import GameItem from '@components/GameItem/GameItem';
import { GameListContainer, NoGameAlert } from '@components/GameListSection/components/GameList/GameList.styles';

import { itemViewType } from '@recoils/fixture/atom';

import { Game } from '@typings/game';

export interface GameListProps {
    games: Game[];
    itemViewType: itemViewType;
    cardCount: number;
}

export const GameList = ({ games, itemViewType, cardCount }: GameListProps) => {
    return (
        <GameListContainer>
            {games.length ? (
                games.map((game) => {
                    return <GameItem key={game.id} game={game} itemViewType={itemViewType} cardCount={cardCount} />;
                })
            ) : (
                <NoGameAlert>경기가 없습니다.</NoGameAlert>
            )}
        </GameListContainer>
    );
};
