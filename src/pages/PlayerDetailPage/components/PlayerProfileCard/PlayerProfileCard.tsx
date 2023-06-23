import { AvatarIcon } from '@components/@shared/Icon';

import {
    NameSection,
    PlayerImageSection,
    PlayerProfileCardContainer,
    PositionSection,
    TeamImageWrap,
} from '@pages/PlayerDetailPage/components/PlayerProfileCard/PlayerProfileCard.styles';

import { Player, PositionEnum } from '@typings/player';

import { AnyOBJ } from '@src/typings';

interface PlayerProfileCardProps {
    player: Player;
    stats: AnyOBJ;
}

export const PlayerProfileCard = ({ player, stats }: PlayerProfileCardProps) => {
    const { name, batSide, pitchHand, positionCode, height, weight, playerNumber, team } = player;

    return (
        <PlayerProfileCardContainer>
            <PlayerImageSection>
                <AvatarIcon color={'#DDDDDD'} size={120} />
                {team && (
                    <TeamImageWrap>
                        <img src={team.imageUrl} alt={team.name} />
                    </TeamImageWrap>
                )}
            </PlayerImageSection>
            <NameSection>
                <h4>{name}</h4>
                {playerNumber !== 9999 && <span> #{playerNumber}</span>}
            </NameSection>
            <PositionSection>
                <span>{PositionEnum[positionCode]}</span>
                {team && <span>@ {team.name}</span>}
            </PositionSection>
        </PlayerProfileCardContainer>
    );
};
