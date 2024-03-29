import { NavLink } from 'react-router-dom';

import styled from '@emotion/styled';

import { FlexRowContainer } from '@components/Layout/Layout.styles';

export const MobileHeaderContainer = styled(FlexRowContainer)({
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    width: '100vw',

    borderBottom: '1px solid var(--grey200)',
});

export const Logo = styled(NavLink)({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '0.5rem',
    width: '100%',
});
