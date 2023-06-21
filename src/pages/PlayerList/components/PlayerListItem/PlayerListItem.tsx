import {
    PlayerListItemContainer,
    StyledCell,
    StyledNameCell,
} from '@pages/PlayerList/components/PlayerListItem/PlayerListItem.styles';

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
