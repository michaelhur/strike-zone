import styled from '@emotion/styled';

export const TeamListItem = styled.li({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '1rem',

    width: 'calc((100% - 3rem)/4)',

    backgroundColor: 'var(--grey0)',
    borderRadius: '0.5rem',
    boxShadow: 'var(--shadowStrong)',

    cursor: 'pointer',
});

export const TeamImage = styled.section({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: '50%',

    '& img': {
        height: '60px',
        width: '60px',
        borderRadius: '50%',
    },
});

export const TeamName = styled.h4({
    fontSize: '1rem',
    color: 'var(--grey1000)',
});
