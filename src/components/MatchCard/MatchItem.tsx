import { CardViewItem } from '@components/MatchCard/components/CardViewItem/CardViewItem';
import { ListViewItem } from '@components/MatchCard/components/ListViewItem/ListViewItem';

import { itemViewType } from '@recoils/schedule/atom';

import { Game } from '@typings/game';

export interface MatchItemProps {
    game: Game;
    itemViewType: itemViewType;
}

const MatchItem = ({ game, itemViewType }: MatchItemProps) => {
    if (itemViewType === 'LIST') return <ListViewItem game={game} />;
    return <CardViewItem game={game} />;
};

export default MatchItem;
