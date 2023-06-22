import { AvatarIcon } from '@components/@shared/Icon';

import { PlayerProfileCardSection } from '@pages/PlayerDetailPage/components/PlayerProfileCard/PlayerProfileCard.styles';

import { Player, PositionEnum } from '@typings/player';

interface PlayerProfileCardProps {
    player: Player;
}

export const PlayerProfileCard = ({ player }: PlayerProfileCardProps) => {
    const { name, lastName, batSide, pitchHand, positionCode, positionType, height, weight } = player;
    return (
        <PlayerProfileCardSection>
            <AvatarIcon color={'#DDDDDD'} size={120} />
            <h4>{name}</h4>
            <span>{PositionEnum[positionCode]}</span>
        </PlayerProfileCardSection>
    );
};
