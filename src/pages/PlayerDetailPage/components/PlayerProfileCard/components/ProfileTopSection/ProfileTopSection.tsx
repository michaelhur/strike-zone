import { AvatarIcon } from '@components/@shared/Icon';
import { Loading } from '@components/Loading/Loading';

import { useGetPlayer } from '@hooks/@query/player/useGetPlayer';

import {
    NameSection,
    PlayerImageSection,
    PositionSection,
    ProfileTopSectionContainer,
    TeamImageWrap,
} from '@pages/PlayerDetailPage/components/PlayerProfileCard/components/ProfileTopSection/ProfileTopSection.styles';

import { PositionEnum } from '@typings/player';

export const ProfileTopSection = ({ slug }: { slug: string }) => {
    const { isLoading: isLoadingPlayer, data: player } = useGetPlayer(slug!);

    return (
        <ProfileTopSectionContainer>
            {isLoadingPlayer || !player ? (
                <Loading size={60} />
            ) : player ? (
                <>
                    <PlayerImageSection>
                        <AvatarIcon color={'#DDDDDD'} size={120} />
                        {player.team && (
                            <TeamImageWrap>
                                <img src={player.team.imageUrl} alt={player.team.name} />
                            </TeamImageWrap>
                        )}
                    </PlayerImageSection>
                    <NameSection>
                        <h4>{player.name}</h4>
                        {player.playerNumber !== 9999 && <span> #{player.playerNumber}</span>}
                    </NameSection>
                    <PositionSection>
                        <span>{PositionEnum[player.positionCode]}</span>
                        {player.team && <span>@ {player.team.name}</span>}
                    </PositionSection>
                </>
            ) : (
                <></>
            )}
        </ProfileTopSectionContainer>
    );
};
