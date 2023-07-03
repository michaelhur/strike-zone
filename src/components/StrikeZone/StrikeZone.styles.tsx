import styled from '@emotion/styled';

export const StrikeZoneContainer = styled.article({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '0.5rem',
    padding: '1rem',
});

export const ZoneLabel = styled.h3({
    fontFamily: 'BMHANNAAir',
    fontSize: '1.5rem',
    color: 'var(--grey1000)',
});

export const StrikeZonePlot = styled.svg({
    backgroundColor: 'var(--grey300)',
    border: '1px solid var(--grey500)',
});
