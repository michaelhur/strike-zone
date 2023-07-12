import styled from '@emotion/styled';

import { FlexRowContainer } from '@components/Layout/Layout.styles';

export const PopupCalendarContainer = styled.article({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '0.5rem',
    padding: '1rem',

    width: '100%',
    maxWidth: '344px',

    position: 'relative',

    '& span': {
        fontFamily: 'BMHANNAAir',
        fontSize: '1rem',
        color: 'var(--grey1000)',
    },
});

export const FixtureDate = styled.section({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: '1rem',

    width: '100%',

    backgroundColor: 'var(--grey200)',
    borderRadius: '1rem',
    border: '1px solid var(--grey200)',

    cursor: 'pointer',

    '& span': {
        fontFamily: 'BMHANNAPro',
        fontSize: '1rem',
        fontWeight: '600',
        color: 'var(--grey1000)',
    },
});

export const CalendarSection = styled(FlexRowContainer)(
    {
        justifyContent: 'flex-start',
        alignItems: 'center',
        // flex: '300px',
        width: '100%',

        position: 'absolute',
        top: '7rem',
        zIndex: '10',

        '& .rdp': {
            margin: '0 !important',
        },
    },
    ({ isOpen }: { isOpen: boolean }) => ({
        display: isOpen ? 'flex' : 'none',
    }),
);
