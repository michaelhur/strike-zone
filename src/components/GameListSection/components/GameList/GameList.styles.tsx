import styled from '@emotion/styled';

export const GameListContainer = styled.section({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '1rem',

    flexWrap: 'wrap',
    width: '100%',
    // flex: '1',
});

export const NoGameAlert = styled.h4({
    padding: '1rem',
    fontFamily: 'BMHANNAPro',
    fontSize: '1rem',
    color: 'var(--grey1000)',
});
