import { DayPicker } from 'react-day-picker';

import styled from '@emotion/styled';

export const StyledDayPicker = styled(DayPicker)`
    padding: 1rem;
    background-color: var(--grey0);
    .rdp-tfoot button {
        margin-top: 1rem;
    }

    .rdp-button_reset {
        color: var(--grey1000);
    }

    .rdp-button_reset:hover {
        color: var(--grey0);
    }

    .rdp-button:hover:not([disabled]):not(.rdp-day_selected) {
        background-color: var(--grey1000);
    }

    .rdp-day_selected,
    .rdp-day_selected:focus-visible,
    .rdp-day_selected:hover,
    .rdp-day_disabled:hover {
        font-weight: 800;
        color: var(--white);
        background-color: var(--primary500);
    }
`;
