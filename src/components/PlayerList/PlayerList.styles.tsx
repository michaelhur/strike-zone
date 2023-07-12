import styled from '@emotion/styled';

export const PlayerListTable = styled.table({
    padding: '1rem',
    width: '100%',
});

export const ListTitle = styled.h3({
    fontFamily: 'BMHANNAAir',
    fontSize: '1.5rem',
    color: 'var(--grey1000)',

    padding: '0 1rem',
    margin: '0 0 -1rem',
});

export const PlayerListHeader = styled.thead({
    padding: '0.5rem',

    width: '100%',

    border: '1px solid var(--grey0)',
    backgroundColor: 'var(--grey100)',

    '& th': {
        padding: '1rem',
    },
});

export const StyledHeaderCell = styled.th({
    padding: '1rem',
    width: '15%',
});

export const StyledNameHeaderCell = styled.th({
    padding: '1rem',
    flex: '1',
});

export const PlayerListBody = styled.tbody({
    width: '100%',
});
