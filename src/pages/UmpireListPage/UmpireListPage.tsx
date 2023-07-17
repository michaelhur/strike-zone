import { useRecoilValue } from 'recoil';

import { SectionTitleWrapper } from '@components/Layout/Layout.styles';

import { UmpireListPageContainer } from '@pages/UmpireListPage/UmpireListPage.styles';
import { UmpireList } from '@pages/UmpireListPage/components/UmpireList/UmpireList';
import { UmpireListMeta } from '@pages/UmpireListPage/components/UmpireListMeta/UmpireListMeta';

import { sidebarCollapseState } from '@recoils/sidebar/atom';

const UmpireListPage = () => {
    const isSidebarOpen = useRecoilValue(sidebarCollapseState);

    return (
        <UmpireListPageContainer isSidebarOpen={isSidebarOpen}>
            <UmpireListMeta />
            <SectionTitleWrapper>
                <h2>심판 리스트</h2>
            </SectionTitleWrapper>
            <UmpireList />
        </UmpireListPageContainer>
    );
};

export default UmpireListPage;
