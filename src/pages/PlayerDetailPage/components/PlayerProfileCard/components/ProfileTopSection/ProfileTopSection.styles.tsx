import styled from '@emotion/styled';

export const ProfileTopSectionContainer = styled.section({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '0.5rem',

    width: '100%',
});

export const PlayerImageSection = styled.section({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    // marginBottom: '-2rem',
});

export const TeamImageWrap = styled.div({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    width: '2rem',
    height: '2rem',

    background: 'var(--white)',
    border: '1px solid var(--white)',
    borderRadius: '50%',

    transform: 'translate(2rem, -2rem)',

    '& img': {
        width: '2rem',
        height: '2rem',
        borderRadius: '50%',
    },
});

export const NameSection = styled.section({
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

export const PositionSection = styled.section({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.5rem',

    '& span': {
        fontFamily: 'BMHANNAAir',
        fontSize: '1rem',
        fontWeight: '400',
    },
});
