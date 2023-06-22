import { AvatarIcon } from '@components/@shared/Icon';

import {
    BioSection,
    BioSectionRow,
    NameSection,
    PlayerProfileCardContainer,
    SectionName,
    SectionValue,
} from '@pages/PlayerDetailPage/components/PlayerProfileCard/PlayerProfileCard.styles';

import { Player, PlayerSideEnum, PositionEnum } from '@typings/player';

interface PlayerProfileCardProps {
    player: Player;
}

export const PlayerProfileCard = ({ player }: PlayerProfileCardProps) => {
    const { name, batSide, pitchHand, positionCode, height, weight, playerNumber } = player;

    return (
        <PlayerProfileCardContainer>
            <AvatarIcon color={'#DDDDDD'} size={120} />
            <NameSection>
                <h4>{name}</h4>
                {playerNumber !== 9999 && <span> #{playerNumber}</span>}
            </NameSection>
            <BioSection>
                <BioSectionRow>
                    <SectionName>Position:</SectionName>
                    <SectionValue>{PositionEnum[positionCode]}</SectionValue>
                </BioSectionRow>
                <BioSectionRow>
                    <SectionName>Pitch/Bat</SectionName>
                    <SectionValue>
                        {PlayerSideEnum[pitchHand]}/{PlayerSideEnum[batSide]}
                    </SectionValue>
                </BioSectionRow>
                <BioSectionRow>
                    <SectionName>Height:</SectionName>
                    <SectionValue>{height}</SectionValue>
                </BioSectionRow>
                <BioSectionRow>
                    <SectionName>Weight:</SectionName>
                    <SectionValue>{weight} lb</SectionValue>
                </BioSectionRow>
            </BioSection>
        </PlayerProfileCardContainer>
    );
};
