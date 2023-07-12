import { useParams } from 'react-router-dom';

import { useRecoilValue } from 'recoil';

import { SectionTitleWrapper } from '@components/Layout/Layout';
import { Loading } from '@components/Loading/Loading';

import { useGetUmpire } from '@hooks/@query/umpire/useGetUmpire';

import { UmpireDetailPageContainer, UmpireStrikeZoneSection } from '@pages/UmpireDetailPage/UmpireDetailPage.styles';
import { UmpireGameList } from '@pages/UmpireDetailPage/components/UmpireGameList/UmpireGameList';
import { MidSection } from '@pages/UmpireDetailPage/components/UmpireGameList/UmpireGameList.styles';
import { UmpireZone } from '@pages/UmpireDetailPage/components/UmpireZone/UmpireZone';

import { sidebarCollapseState } from '@recoils/sidebar/atom';

const UmpireDetailPage = () => {
    const { id } = useParams();
    const umpireId = Number(id);
    const isSidebarOpen = useRecoilValue(sidebarCollapseState);

    const { isLoading, data: umpire } = useGetUmpire(umpireId);

    return (
        <UmpireDetailPageContainer isSidebarOpen={isSidebarOpen}>
            <SectionTitleWrapper>
                {isLoading || !umpire ? <Loading size={60} /> : <h2>{umpire.name}</h2>}
            </SectionTitleWrapper>
            <MidSection>
                <UmpireGameList id={umpireId} />
                <UmpireStrikeZoneSection>
                    <UmpireZone id={umpireId} latest={true} />
                    <UmpireZone id={umpireId} latest={false} />
                </UmpireStrikeZoneSection>
            </MidSection>
        </UmpireDetailPageContainer>
    );
};

export default UmpireDetailPage;
