import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { CardViewItem } from '@components/GameItem/components/CardViewItem/CardViewItem';
import { ListViewItem } from '@components/GameItem/components/ListViewItem/ListViewItem';

import { itemViewType } from '@recoils/fixture/atom';

import { Game } from '@typings/game';

export interface GameItemProps {
    game: Game;
    itemViewType: itemViewType;
    cardCount?: number;
}

export interface ViewItemProps {
    game: Game;
    onClickItem: () => void;
    cardCount: number;
}

const GameItem = ({ game, itemViewType, cardCount = 1 }: GameItemProps) => {
    const navigate = useNavigate();
    const onClickGameItem = useCallback(() => {
        if (game.isFinal) navigate(`/games/${game.slug}`);
        else alert('취소된 경기의 정보는 열람할 수 없습니다.');
    }, [game]);

    if (itemViewType === 'LIST')
        return <ListViewItem game={game} onClickItem={onClickGameItem} cardCount={cardCount} />;
    return <CardViewItem game={game} onClickItem={onClickGameItem} cardCount={cardCount} />;
};

export default GameItem;
