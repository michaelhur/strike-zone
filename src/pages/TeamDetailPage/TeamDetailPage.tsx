import { useParams } from 'react-router-dom';

import { TeamDetailPageContainer } from '@pages/TeamDetailPage/TeamDetailPage.styles';

const TeamDetailPage = () => {
    const { id } = useParams();

    return <TeamDetailPageContainer>{id}</TeamDetailPageContainer>;
};

export default TeamDetailPage;
