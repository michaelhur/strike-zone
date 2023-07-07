import styled from '@emotion/styled';

import { FlexColumnContainer } from '@components/Layout/Layout';

export const UmpireListItemContainer = styled(FlexColumnContainer)({
    padding: '1rem',

    width: 'calc((100% - 3rem)/4)',

    backgroundColor: 'var(--grey0)',
    borderRadius: '0.5rem',

    cursor: 'pointer',

    '& span': {
        fontSize: '1rem',
        fontColor: 'var(--grey1000)',
    },
});
