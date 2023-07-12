import styled from '@emotion/styled';

import { FlexColumnContainer, FlexRowContainer } from '@components/Layout/Layout.styles';

export const ProfileContainer = styled(FlexRowContainer)({
    gap: '1rem',
    padding: '2rem',
    width: '100%',

    backgroundColor: 'var(--grey200)',
    borderRadius: '0.5rem',
});

export const LogoSection = styled(FlexColumnContainer)({
    justifyContent: 'center',
    alignItems: 'center',

    '& img': {
        height: '8rem',
        width: '8rem',
        borderRadius: '50%',
    },
});

export const DetailSection = styled(FlexColumnContainer)({
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '1rem',
    padding: '1rem',

    width: '100%',
});

export const TeamName = styled.h3({
    fontFamily: 'BMHANNAPro',
    fontSize: '2rem',
    fontWeight: '800',
    color: 'var(--grey1000)',
});

export const StandingSection = styled(FlexRowContainer)({
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '0.5rem',

    '& span': {
        fontSize: '1rem',
        fontColor: 'var(--grey800)',
    },
});
