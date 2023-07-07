import { UmpireListItemContainer } from '@pages/UmpireListPage/components/UmpireListItem/UmpireListItem.styles';

import { Umpire } from '@typings/umpire';

interface UmpireListItemProps {
    umpire: Umpire;
    onClickItem: (id: number) => void;
}

export const UmpireListItem = ({ umpire, onClickItem }: UmpireListItemProps) => {
    return <UmpireListItemContainer onClick={() => onClickItem(umpire.id)}>{umpire.name}</UmpireListItemContainer>;
};
