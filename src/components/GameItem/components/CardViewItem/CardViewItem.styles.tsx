import styled from '@emotion/styled';

import { breakpoints } from '@styles/theme';

export const CardViewContainer = styled.article(
    {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '1rem',

        height: '226px',

        background: 'var(--grey0)',
        boxShadow: 'var(--shadowStrong)',
        borderRadius: '0.5rem',

        cursor: 'pointer',
        transition: 'box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s',

        '&:hover': {
            transform: 'translateY(-0.25rem)',
        },
    },
    ({ cardCount }: { cardCount: number }) => ({
        width: cardCount === 1 ? '100%' : `calc((100% - ${cardCount - 1}rem)/${cardCount})`,

        [`@media (max-width: ${breakpoints.DESKTOP_MEDIUM})`]: {
            width:
                cardCount === 3
                    ? `calc((100% - ${cardCount - 2}rem)/${cardCount - 1})`
                    : cardCount <= 2
                    ? '100%'
                    : `calc((100% - 1rem)/2)`,
        },

        [`@media (max-width: ${breakpoints.DESKTOP_SMALL})`]: {
            width: cardCount <= 2 ? '100%' : `calc((100% - 1rem)/2)`,
        },

        [`@media (max-width: ${breakpoints.TABLET})`]: {
            width: '100%',
        },
    }),
);

export const CardViewTopSection = styled.section({
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

export const CardViewMatchupSection = styled.section({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    width: '100%',
});

export const CardViewTeamSectionContainer = styled.section({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.25rem',
    // padding: '1rem',

    // width: '9rem',
    width: '30%',
});

export const CardViewTeamImage = styled.div({
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

export const CardViewTeamName = styled.span({
    fontSize: '1rem',
    lineHeight: '1rem',
    textAlign: 'center',
});

export const CardViewHomeOrAway = styled.span({
    fontSize: '0.75rem',
    lineHeight: '1.5rem',
    color: 'var(--grey700)',
});

export const CardViewScoreSectionContainer = styled.section({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    gap: '0.25rem',
    flex: '1',
    // padding: '1rem',
});

export const CardViewScoreLine = styled.article({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
});

export const CardViewScore = styled.h1({
    fontSize: '3rem',
    fontWeight: '800',

    padding: '0.25rem 0.5rem',
});

export const CardViewGameStatus = styled.h4({
    fontSize: '1.5rem',
    color: 'var(--grey700)',
});
