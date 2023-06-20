import styled from '@emotion/styled';

import { IconWrap } from '@components/@shared/Icon/Icon.styles';
import { FlexRowContainer } from '@components/Layout/Layout';

export const CategoryMenuContainer = styled(FlexRowContainer)({
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    width: '100%',
});

export const CategoryMenuWrapper = styled(FlexRowContainer)({
    width: '100%',
});

export const ItemViewChangerWrapper = styled(FlexRowContainer)({
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: '0.5rem',
});

export const ItemViewIconWrap = styled(IconWrap)({
    padding: '0.25rem',
    cursor: 'pointer',
});
