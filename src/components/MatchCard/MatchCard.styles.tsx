import styled from '@emotion/styled';

export const CardContainer = styled.article({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '1rem',
    width: '100%',

    background: 'var(--grey0)',
    boxShadow: 'var(--shadowUp)',
    borderRadius: '0.5rem',
});

export const CardTopSection = styled.section({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '0.5rem',

    '& h4': {
        fontFamily: 'BMHANNAPro',
        fontSize: '1rem',
        fontWeight: '600',
    },

    '& span': {
        fontFamily: 'BMHANNAAir',
        fontSize: '0.75rem',
        fontWeight: '400',
        color: 'var(--grey700)',
    },
});

export const CardMatchupSection = styled.section({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    width: '100%',
});

export const TeamSectionContainer = styled.section({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '0.25rem',
    padding: '1rem',

    width: '7rem',
});

export const TeamImage = styled.div({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    height: '5rem',
    width: '5rem',
    borderRadius: '50%',

    '& img': {
        height: '5rem',
        width: '5rem',
        borderRadius: '50%',
        objectFit: 'scale-down',
    },
});

export const TeamName = styled.span({
    fontSize: '1rem',
    lineHeight: '1rem',
});

export const HomeOrAway = styled.span({
    fontSize: '0.75rem',
    lineHeight: '1.5rem',
    color: 'var(--grey700)',
});

export const ScoreSectionContainer = styled.section({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    gap: '0.25rem',
    padding: '1rem',
});

export const ScoreLine = styled.article({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
});

export const Score = styled.h1({
    fontSize: '3rem',
    fontWeight: '800',

    padding: '0.25rem 0.5rem',
});

export const GameStatus = styled.h4({
    fontSize: '1.5rem',
    color: 'var(--grey700)',
});
