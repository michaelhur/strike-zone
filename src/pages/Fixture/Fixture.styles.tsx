import { DayPicker } from 'react-day-picker';

import styled from '@emotion/styled';

import { RowPageContainer } from '@components/Layout/Layout';

export const FixturePageContainer = styled(RowPageContainer)({
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: '2rem',
});

export const DayPickerWrapper = styled.div({
    backgroundColor: 'var(--grey0)',
});

export const StyledDayPicker = styled(DayPicker)`
    .rdp-button_reset {
        color: var(--grey1000);
    }

    .rdp-button_reset:hover {
        color: var(--grey0);
    }

    .rdp-day_selected,
    .rdp-day_selected:focus-visible,
    .rdp-day_selected:hover {
        font-weight: 800;
        color: var(--white);
        background-color: var(--primary500);
    }
`;
