import styled from '@emotion/styled';

export const PlayerProfileCardContainer = styled.article({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '1rem',

    width: '100%',

    background: 'var(--grey0)',
    border: '1px solid var(--grey200)',
    borderRadius: '0.5rem',
});

export const NameSection = styled.div({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.5rem',

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

export const BioSection = styled.section({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.5rem',

    padding: '1rem',

    width: '100%',
});

export const BioSectionRow = styled.div({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0 1rem',

    width: '100%',
});

export const SectionName = styled.span({
    color: 'var(--grey700)',
    testAlign: 'right',
    width: '50%',
});

export const SectionValue = styled.span({
    fontWeight: '600',
    testAlign: 'left',
    width: '50%',
});
