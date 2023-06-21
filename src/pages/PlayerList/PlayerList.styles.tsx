import styled from '@emotion/styled';

import { PageSectionContainer } from '@components/Layout/Layout';

export const PlayerListContainer = styled(PageSectionContainer)({
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: '2rem',
});

export const PlayerListTable = styled.table({
    padding: '1rem',
    width: '100%',
});

export const PlayerListHeader = styled.thead({
    padding: '0.5rem',

    width: '100%',

    border: '1px solid var(--grey0)',
    backgroundColor: 'var(--grey100)',

    cursor: 'pointer',

    '& th': {
        padding: '1rem',
    },
});

export const StyledHeaderCell = styled.th({
    padding: '1rem',
    width: '10%',
});

export const StyledNameHeaderCell = styled.th({
    padding: '1rem',
    flex: '1',
});
