import styled from '@emotion/styled';

import { PageContainer } from '@components/Layout/Layout';

export const HomePageContainer = styled(PageContainer)({
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: '2rem',
});

export const GameListSection = styled.section({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '1rem',
});

export const GameListContainer = styled.section({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '1rem',

    flexWrap: 'wrap',
    flex: '1',
});

export const ContainerTitleWrapper = styled.div({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: '1rem',

    '& h2': {
        fontSize: '2rem',
    },
});
