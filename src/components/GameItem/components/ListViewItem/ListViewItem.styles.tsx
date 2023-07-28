import styled from '@emotion/styled';

import { breakpoints } from '@styles/theme';

export const ListViewContainer = styled.article(
    {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '1rem 0.5rem',

        height: '80px',
        // minWidth: '300px',
        width: 'calc((100% - 1rem) / 2)',

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

export const ListViewTeamSectionContainer = styled.section(
    {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: '0.25rem',
        width: '125px',
    },
    ({ homeOrAway }: { homeOrAway: 'Home' | 'Away' }) => ({
        flexDirection: homeOrAway === 'Home' ? 'row' : 'row-reverse',
    }),
);

export const ListViewTeamImage = styled.div({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    height: '3rem',
    width: '3rem',
    borderRadius: '50%',

    '& img': {
        height: '3rem',
        width: '3rem',
        borderRadius: '50%',
        objectFit: 'scale-down',
    },
});

export const ListViewTeamName = styled.div({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    '& span': {
        fontSize: '14px',
        lineHeight: '1rem',
        textAlign: 'center',
    },
});

export const ListViewScoreSectionContainer = styled.section({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    gap: '0.25rem',
    width: '75px',
    // padding: '1rem',
});

export const ListViewScoreLine = styled.article({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
});

export const ListViewScore = styled.h1({
    fontSize: '1.25rem',
    fontWeight: '800',

    padding: '0.25rem',
});

export const ListViewDate = styled.span({
    fontSize: '0.75rem',
    color: 'var(--grey600)',
});

export const ListViewGameStatus = styled.h4({
    fontSize: '1rem',
    color: 'var(--grey700)',
});
