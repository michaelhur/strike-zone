import { NavLink } from 'react-router-dom';

import styled from '@emotion/styled';

import { FlexRowContainer } from '@components/Layout/Layout';

export const MobileHeaderContainer = styled(FlexRowContainer)({
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: '1rem',
    width: '100%',

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
