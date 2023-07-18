import styled from '@emotion/styled';

import { FlexRowContainer } from '@components/Layout/Layout.styles';

export const NameFilterContainer = styled(FlexRowContainer)({
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '1rem',

    width: '100%',
});

export const NameFilterWrapper = styled(FlexRowContainer)({
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
    gap: '0.5rem',

    color: 'var(--grey700)',

    background: 'var(--grey0)',
    border: '1px solid var(--grey100)',
    borderRadius: '0.5rem',

    flexWrap: 'wrap',
});

export const NameFilterButtonWrap = styled.article({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.25rem',

    height: '30px',
    minWidth: '30px',

    color: 'var(--grey700)',

    background: 'var(--grey0)',
    borderRadius: '0.5rem',

    cursor: 'pointer',

    '&:hover, &.active': {
        color: 'var(--grey0)',
        backgroundColor: 'var(--grey1000)',
    },
});
