import styled from '@emotion/styled';

import { FlexColumnContainer, FlexRowContainer } from '@components/Layout/Layout';

export const GameDataSectionContainer = styled(FlexColumnContainer)({
    justifyContent: 'flex-start',
    alignItems: 'center',
});

export const TopSectionContainer = styled(FlexRowContainer)({
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    gap: '1rem',
    padding: '1rem',
    width: '100%',

    '& h2': {
        fontFamily: 'BMHANNAPro',
        fontSize: '2rem',
        fontWeight: '600',
    },

    '& span': {
        fontFamily: 'BMHANNAAir',
        fontSize: '1rem',
        fontWeight: '400',
        color: 'var(--grey700)',
    },
});

export const MatchupSectionContainer = styled(FlexRowContainer)({
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '1rem',
    padding: '1rem',
    width: '100%',
});

export const TeamInformation = styled(FlexRowContainer)(
    {
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    ({ isHome }: { isHome: boolean }) => ({
        flexDirection: isHome ? 'row' : 'row-reverse',
    }),
);

export const TeamImageWrapper = styled(FlexColumnContainer)({
    justifyContent: 'center',
    alignItems: 'center',

    width: '6rem',
    height: '6rem',

    '& img': {
        width: '6rem',
        height: '6rem',
        borderRadius: '50%',
    },
});

export const TeamDetailWrapper = styled(FlexColumnContainer)({
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '200px',
});

export const TeamName = styled.span({
    fontSize: '1.25rem',
    fontWeight: '600',
    color: 'var(--grey1000)',
});

export const HomeAway = styled.span({
    fontSize: '1rem',
    color: 'var(--grey700)',
});

export const ScoreLineContainer = styled(FlexRowContainer)({
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.5rem',

    '& h3': {
        fontSize: '1.5rem',
    },

    '& span': {
        fontSize: '1rem',
    },
});
