import styled from '@emotion/styled';

export const GameListSection = styled.section({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '1rem',
});

export const GameListContainer = styled.section({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '1rem',

    flexWrap: 'wrap',
    flex: '1',
});

export const ContainerTitleWrapper = styled.div({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: '1rem',

    '& h2': {
        fontFamily: 'BMHANNAAir',
        fontSize: '2rem',
    },
});