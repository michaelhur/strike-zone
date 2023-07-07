import { useParams } from 'react-router-dom';

import {
    MidSection,
    TeamDetailPageContainer,
    TeamStrikeZoneSection,
} from '@pages/TeamDetailPage/TeamDetailPage.styles';
import { TeamGameList } from '@pages/TeamDetailPage/components/TeamGameList/TeamGameList';
import { TeamProfile } from '@pages/TeamDetailPage/components/TeamProfile/TeamProfile';
import { TeamRoster } from '@pages/TeamDetailPage/components/TeamRoster/TeamRoster';
import { TeamStrikeZone } from '@pages/TeamDetailPage/components/TeamStrikeZone/TeamStrikeZone';

const TeamDetailPage = () => {
    const { id } = useParams();
    const teamId = Number(id);

    return (
        <TeamDetailPageContainer>
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
