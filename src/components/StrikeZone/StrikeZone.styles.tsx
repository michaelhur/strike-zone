import styled from '@emotion/styled';

import { FlexRowContainer } from '@components/Layout/Layout.styles';

export const StrikeZoneRow = styled(FlexRowContainer)({
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '1rem',

    flexWrap: 'wrap',
});

export const StrikeZoneList = styled.ul({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '1rem',

    flexWrap: 'wrap',
});

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
