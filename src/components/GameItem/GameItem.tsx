import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { CardViewItem } from '@components/GameItem/components/CardViewItem/CardViewItem';
import { ListViewItem } from '@components/GameItem/components/ListViewItem/ListViewItem';

import { itemViewType } from '@recoils/fixture/atom';

import { Game } from '@typings/game';

export interface GameItemProps {
    game: Game;
    itemViewType: itemViewType;
}

export interface ViewItemProps {
    game: Game;
    onClickItem: () => void;
}

const GameItem = ({ game, itemViewType }: GameItemProps) => {
    const navigate = useNavigate();
    const onClickGameItem = useCallback(() => {
        if (game.isFinal) navigate(`/games/${game.slug}`);
        else alert('취소된 경기의 정보는 열람할 수 없습니다.');
    }, [game]);

    if (itemViewType === 'LIST') return <ListViewItem game={game} onClickItem={onClickGameItem} />;
    return <CardViewItem game={game} onClickItem={onClickGameItem} />;
};

export default GameItem;
