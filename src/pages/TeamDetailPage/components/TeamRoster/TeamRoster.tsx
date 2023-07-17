import { useNavigate } from 'react-router-dom';

import { DYNAMIC_PATH } from '@constants/routes';

import { SectionTitle } from '@components/Layout/Layout.styles';
import { Loading } from '@components/Loading/Loading';
import { PlayerList } from '@components/PlayerList/PlayerList';

import { useGetTeamRoster } from '@hooks/@query/team/useGetTeamRoster';
import { usePlayerPositionType } from '@hooks/player/usePlayerPositionType';

import { TeamRosterContainer } from '@pages/TeamDetailPage/components/TeamRoster/TeamRoster.styles';

interface TeamRosterProps {
    teamId: number;
}

export const TeamRoster = ({ teamId }: TeamRosterProps) => {
    const navigate = useNavigate();
    const { isLoading, data } = useGetTeamRoster(teamId);
    const [pitchers, catchers, infielders, outfielders, hitters, twp] =
        isLoading || !data ? [[], []] : usePlayerPositionType(data);

    const onClickPlayerItem = (slug: string) => navigate(`${DYNAMIC_PATH.PLAYER_DETAIL(slug)}`);

    return (
        <TeamRosterContainer>
            <SectionTitle>팀 로스터</SectionTitle>
            {isLoading || !data ? (
                <Loading size={60} />
            ) : (
                <>
                    <PlayerList players={pitchers} onClickItem={onClickPlayerItem} listTitle={'투수'} />
                    <PlayerList players={catchers} onClickItem={onClickPlayerItem} listTitle={'포수'} />
                    <PlayerList players={infielders} onClickItem={onClickPlayerItem} listTitle={'내야수'} />
                    <PlayerList players={outfielders} onClickItem={onClickPlayerItem} listTitle={'외야수'} />
                    {hitters.length > 0 && (
                        <PlayerList players={hitters} onClickItem={onClickPlayerItem} listTitle={'지명타자'} />
                    )}
                    {twp.length > 0 && (
                        <PlayerList players={twp} onClickItem={onClickPlayerItem} listTitle={'이도류'} />
                    )}
                </>
            )}
        </TeamRosterContainer>
    );
};
