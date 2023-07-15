import { useParams } from 'react-router-dom';

import { useRecoilValue } from 'recoil';

import {
    MidSection,
    TeamDetailPageContainer,
    TeamStrikeZoneSection,
} from '@pages/TeamDetailPage/TeamDetailPage.styles';
import { TeamDetailHelmet } from '@pages/TeamDetailPage/components/TeamDetailHelmet/TeamDetailHelmet';
import { TeamGameList } from '@pages/TeamDetailPage/components/TeamGameList/TeamGameList';
import { TeamProfile } from '@pages/TeamDetailPage/components/TeamProfile/TeamProfile';
import { TeamRoster } from '@pages/TeamDetailPage/components/TeamRoster/TeamRoster';
import { TeamStrikeZone } from '@pages/TeamDetailPage/components/TeamStrikeZone/TeamStrikeZone';

import { sidebarCollapseState } from '@recoils/sidebar/atom';

const TeamDetailPage = () => {
    const { id } = useParams();
    const teamId = Number(id);
    const isSidebarOpen = useRecoilValue(sidebarCollapseState);

    return (
        <TeamDetailPageContainer isSidebarOpen={isSidebarOpen}>
            <TeamDetailHelmet teamId={teamId} />
            <TeamProfile teamId={teamId} />
            <MidSection>
                <TeamGameList teamId={teamId} />
                <TeamStrikeZoneSection>
                    <TeamStrikeZone teamId={teamId} latest={true} />
                    <TeamStrikeZone teamId={teamId} latest={false} />
                </TeamStrikeZoneSection>
            </MidSection>
            <TeamRoster teamId={teamId} />
        </TeamDetailPageContainer>
    );
};

export default TeamDetailPage;
