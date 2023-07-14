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
            <SectionTitle>Roster</SectionTitle>
            {isLoading || !data ? (
                <Loading size={60} />
            ) : (
                <>
                    <PlayerList players={pitchers} onClickItem={onClickPlayerItem} listTitle={'Pitcher'} />
                    <PlayerList players={catchers} onClickItem={onClickPlayerItem} listTitle={'Catcher'} />
                    <PlayerList players={infielders} onClickItem={onClickPlayerItem} listTitle={'Infielder'} />
                    <PlayerList players={outfielders} onClickItem={onClickPlayerItem} listTitle={'Outfielder'} />
                    <PlayerList players={hitters} onClickItem={onClickPlayerItem} listTitle={'DH'} />
                    {twp.length ? (
                        <PlayerList players={twp} onClickItem={onClickPlayerItem} listTitle={'Two Way Player'} />
                    ) : (
                        <></>
                    )}
                </>
            )}
        </TeamRosterContainer>
    );
};
