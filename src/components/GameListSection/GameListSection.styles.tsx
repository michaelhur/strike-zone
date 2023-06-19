import styled from '@emotion/styled';

import { ColumnPageContainer } from '@components/Layout/Layout';

export const GameListSectionContainer = styled(ColumnPageContainer)({
    padding: '1rem',
    gap: '1rem',

    flex: '1',
});

export const GameListWrapper = styled.section({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '1rem',
    flex: '1',
});
