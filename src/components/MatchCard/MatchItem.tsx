import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { CardViewItem } from '@components/MatchCard/components/CardViewItem/CardViewItem';
import { ListViewItem } from '@components/MatchCard/components/ListViewItem/ListViewItem';

import { itemViewType } from '@recoils/schedule/atom';

import { Game } from '@typings/game';

export interface MatchItemProps {
    game: Game;
    itemViewType: itemViewType;
}

export interface ViewItemProps {
    game: Game;
    onClickItem: () => void;
}

const MatchItem = ({ game, itemViewType }: MatchItemProps) => {
    const navigate = useNavigate();
    const onClickMatchItem = useCallback(() => {
        if (game.isFinal) navigate(`/games/${game.slug}`);
        else alert('취소된 경기의 정보는 열람할 수 없습니다.');
    }, [game]);

    if (itemViewType === 'LIST') return <ListViewItem game={game} onClickItem={onClickMatchItem} />;
    return <CardViewItem game={game} onClickItem={onClickMatchItem} />;
};

export default MatchItem;
