import { PlayerListItemContainer, StyledCell, StyledNameCell } from '@components/PlayerListItem/PlayerListItem.styles';

import { Player, PlayerSideEnum } from '@typings/player';

interface PlayerListItemProps {
    player: Player;
    onClickPlayerItem: (slug: string) => void;
}

export const PlayerListItem = ({ player, onClickPlayerItem }: PlayerListItemProps) => {
    const { name, batSide, pitchHand, positionCode, height, weight, slug, team } = player;

    return (
        <PlayerListItemContainer onClick={() => onClickPlayerItem(slug)}>
            <StyledNameCell>{name}</StyledNameCell>
            <StyledCell>{team?.abbreviation || 'FA'}</StyledCell>
            <StyledCell>{PlayerSideEnum[batSide]}</StyledCell>
            <StyledCell>{PlayerSideEnum[pitchHand]}</StyledCell>
            <StyledCell>{positionCode}</StyledCell>
            <StyledCell>{height}</StyledCell>
            <StyledCell>{weight} lb</StyledCell>
        </PlayerListItemContainer>
    );
};
