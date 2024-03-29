import { PlayerListItemContainer, StyledCell, StyledNameCell } from '@components/PlayerListItem/PlayerListItem.styles';

import { useResponsive } from '@hooks/common/useResponsive';

import { BatSideEnum, PitchHandEnum, Player } from '@typings/player';

interface PlayerListItemProps {
    player: Player;
    onClickPlayerItem: (slug: string) => void;
}

export const PlayerListItem = ({ player, onClickPlayerItem }: PlayerListItemProps) => {
    const { name, batSide, pitchHand, positionCode, slug, team } = player;
    const isMobile = !useResponsive(600);

    return (
        <PlayerListItemContainer onClick={() => onClickPlayerItem(slug)}>
            <StyledNameCell>{name}</StyledNameCell>
            <StyledCell>{team?.abbreviation || 'FA'}</StyledCell>
            <StyledCell>{positionCode}</StyledCell>
            {!isMobile && (
                <>
                    <StyledCell>{BatSideEnum[batSide]}</StyledCell>
                    <StyledCell>{PitchHandEnum[pitchHand]}</StyledCell>
                </>
            )}
        </PlayerListItemContainer>
    );
};
