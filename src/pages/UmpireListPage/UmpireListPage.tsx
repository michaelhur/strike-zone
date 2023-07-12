import { useRecoilValue } from 'recoil';

import { SectionTitleWrapper } from '@components/Layout/Layout';

import { UmpireListPageContainer } from '@pages/UmpireListPage/UmpireListPage.styles';
import { UmpireList } from '@pages/UmpireListPage/components/UmpireList/UmpireList';

import { sidebarCollapseState } from '@recoils/sidebar/atom';

const UmpireListPage = () => {
    const isSidebarOpen = useRecoilValue(sidebarCollapseState);

    return (
        <UmpireListPageContainer isSidebarOpen={isSidebarOpen}>
            <SectionTitleWrapper>
                <h2>Umpire</h2>
            </SectionTitleWrapper>
            <UmpireList />
        </UmpireListPageContainer>
    );
};

export default UmpireListPage;
