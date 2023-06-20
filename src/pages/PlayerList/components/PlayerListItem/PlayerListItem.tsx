import styled from '@emotion/styled';

import { AvatarIcon } from '@components/@shared/Icon';

import { Player } from '@typings/player';

interface PlayerListItemProps {
    player: Player;
    onClickPlayerItem: (id: number) => void;
}

export const PlayerListItem = ({ player, onClickPlayerItem }: PlayerListItemProps) => {
    const { id, name, batSide, pitchHand, positionCode, height, weight } = player;

    const onClickItem = () => onClickPlayerItem(id);

    return (
        <PlayerListItemContainer onClick={onClickItem}>
            <td>{name}</td>
            <td>{batSide}</td>
            <td>{pitchHand}</td>
            <td>{positionCode}</td>
            <td>{height}</td>
            <td>{weight} lb</td>
        </PlayerListItemContainer>
    );
};

export const PlayerListItemContainer = styled.tr({
    padding: '0.5rem',

    width: '100%',

    border: '1px solid var(--grey1000)',
    backgroundColor: 'var(--grey0)',

    cursor: 'pointer',

    '& td': {
        padding: '1rem',
    },
});
