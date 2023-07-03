import { PitchOutcomeColorVariant } from '@constants/pitch';
import styled from '@emotion/styled';

import { FlexColumnContainer, FlexRowContainer } from '@components/Layout/Layout';

import { OutcomeType } from '@typings/atbat';

export const TooltipContainer = styled(FlexColumnContainer)({
    width: '100%',
    gap: '0.5rem',
    padding: '1rem 0.5rem',

    backgroundColor: 'var(--grey0)',
});

export const PlayerSection = styled(FlexRowContainer)({
    justifyContent: 'flex-start',
    alignItems: 'center',
});

export const PlayerImageSection = styled(FlexColumnContainer)({
    justifyContent: 'center',
    alignItems: 'center',

    height: '3rem',
    width: '3rem',
    borderRadius: '50%',

    '& img': {
        height: '2rem',
        width: '2rem',
        borderRadius: '50%',
    },
});

export const PlayerInfoSection = styled(FlexColumnContainer)({
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
});

export const PlayerType = styled.span({
    color: 'var(--grey1000)',
    fontSize: '1rem',
});

export const PlayerInfo = styled.span({
    color: 'var(--grey700)',
    fontSize: '0.75rem',
});

export const PitchInfoSection = styled(FlexColumnContainer)({
    justifyContent: 'flex-start',
    alignItems: 'flex-start',

    padding: '0 0.75rem',
});

export const Outcome = styled.span(
    {
        fontSize: '1rem',
        fontWeight: '600',
        color: 'var(--grey700)',
    },
    ({ outcomeType }: { outcomeType: OutcomeType }) => ({
        color: PitchOutcomeColorVariant[outcomeType].color,
    }),
);

export const PitchInfo = styled.span({
    color: 'var(--grey1000)',
    fontSize: '1rem',
});

export const Velocity = styled.span({
    color: 'var(--grey700)',
    fontSize: '1rem',
});
