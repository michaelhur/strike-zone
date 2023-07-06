import { useParams } from 'react-router-dom';

import { MidSection, TeamDetailPageContainer } from '@pages/TeamDetailPage/TeamDetailPage.styles';
import { TeamProfile } from '@pages/TeamDetailPage/components/TeamProfile/TeamProfile';

const TeamDetailPage = () => {
    const { id } = useParams();

    return (
        <TeamDetailPageContainer>
            <TeamProfile teamId={Number(id)!} />
            <MidSection></MidSection>
            {id}
        </TeamDetailPageContainer>
    );
};

export default TeamDetailPage;
