import styled from '@emotion/styled';

import { Player, PlayerSideEnum, PositionEnum } from '@typings/player';

interface PlayerListItemProps {
    player: Player;
    onClickPlayerItem: (id: number) => void;
}

export const PlayerListItem = ({ player, onClickPlayerItem }: PlayerListItemProps) => {
    const { id, name, batSide, pitchHand, positionCode, height, weight } = player;

    const onClickItem = () => onClickPlayerItem(id);

    return (
        <PlayerListItemContainer onClick={onClickItem}>
            <StyledNameCell>{name}</StyledNameCell>
            <StyledCell>{PlayerSideEnum[batSide]}</StyledCell>
            <StyledCell>{PlayerSideEnum[pitchHand]}</StyledCell>
            <StyledCell>{PositionEnum[positionCode]}</StyledCell>
            <StyledCell>{height}</StyledCell>
            <StyledCell>{weight} lb</StyledCell>
        </PlayerListItemContainer>
    );
};

export const PlayerListItemContainer = styled.tr({
    padding: '0.5rem',

    width: '100%',

    border: '1px solid var(--grey1000)',
    backgroundColor: 'var(--grey0)',

    cursor: 'pointer',
});

export const StyledCell = styled.td({
    padding: '1rem',
    width: '10%',
});

export const StyledNameCell = styled.td({
    padding: '1rem',
    flex: '1',
});
