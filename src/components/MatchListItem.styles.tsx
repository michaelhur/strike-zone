import styled from '@emotion/styled';

export const ListViewContainer = styled.article({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    width: '100%',

    background: 'var(--grey0)',
    boxShadow: 'var(--shadowStrong)',
    borderRadius: '0.5rem',

    cursor: 'pointer',
    transition: 'box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s',

    '&:hover': {
        transform: 'translateY(-0.5rem)',
    },
});

export const ListViewTeamSectionContainer = styled.section(
    {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
    },
    ({ homeOrAway }: { homeOrAway: 'Home' | 'Away' }) => ({
        flexDirection: homeOrAway === 'Home' ? 'row' : 'row-reverse',
        justifyContent: homeOrAway === 'Home' ? 'flex-end' : 'flex-start',
    }),
);

export const ListViewTeamImage = styled.div({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    height: '2rem',
    width: '2rem',
    borderRadius: '50%',

    '& img': {
        height: '2rem',
        width: '2rem',
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
    },
});

export const ListViewScoreSectionContainer = styled.section({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    gap: '0.25rem',
    // padding: '1rem',
});

export const ListViewScoreLine = styled.article({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
});

export const ListViewScore = styled.h1({
    fontSize: '1.5rem',
    fontWeight: '800',

    padding: '0.25rem',
});

export const ListViewGameStatus = styled.h4({
    fontSize: '0.75rem',
    color: 'var(--grey700)',
});
