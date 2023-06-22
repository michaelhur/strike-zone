import styled from '@emotion/styled';

export const PlayerProfileCardSection = styled.article({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '1rem',

    width: '350px',

    border: '1px solid var(--grey200)',
    borderRadius: '0.5rem',

    '& h4': {
        fontFamily: 'BMHANNAPro',
        fontSize: '1.25rem',
        fontWeight: '600',
    },

    '& span': {
        fontFamily: 'BMHANNAAir',
        fontSize: '1rem',
        fontWeight: '400',
        color: 'var(--grey700)',
    },
});
