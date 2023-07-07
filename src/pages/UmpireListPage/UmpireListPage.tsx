import { SectionTitleWrapper } from '@components/Layout/Layout';

import { UmpireListPageContainer } from '@pages/UmpireListPage/UmpireListPage.styles';
import { UmpireList } from '@pages/UmpireListPage/components/UmpireList/UmpireList';

const UmpireListPage = () => {
    return (
        <UmpireListPageContainer>
            <SectionTitleWrapper>
                <h2>Umpire</h2>
            </SectionTitleWrapper>
            <UmpireList />
        </UmpireListPageContainer>
    );
};

export default UmpireListPage;
