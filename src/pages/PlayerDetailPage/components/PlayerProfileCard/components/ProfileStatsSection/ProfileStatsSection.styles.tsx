import styled from '@emotion/styled';

import { FlexRowContainer } from '@components/Layout/Layout';

export const ProfileStatsSectionContainer = styled.section({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '0.5rem',

    width: '100%',
});

export const StatsSectionTitleWrap = styled.div({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    '& h4': {
        fontFamily: 'BMHANNAPro',
        fontSize: '1.25rem',
        fontWeight: '600',
        color: 'var(--grey0)',
        padding: '0.5rem',

        backgroundColor: 'var(--grey700)',
        borderRadius: '0.5rem',
    },
});

export const StatsSectionDetailWrap = styled.section({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',

    width: '100%',
});

export const StatsRow = styled(FlexRowContainer)({
    justifyContent: 'center',
    alignItems: 'center',

    width: '100%',
});

export const StatsCell = styled.article({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',

    height: '72px',

    border: '1px solid var(--grey300)',

    flex: '1',

    '& h4': {
        fontSize: '1.25rem',
        color: 'var(--grey1000)',
    },

    '& span': {
        fontSize: '.75rem',
        fontWeight: '400',
        color: 'var(--grey700)',
    },
});
