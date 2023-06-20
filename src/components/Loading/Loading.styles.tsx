import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { LogoIcon } from '@components/@shared/Icon/LogoIcon';

const logoAnimation = keyframes({
    '0%': {
        fill: 'transparent',
    },
    '100%': {
        fill: '#0040f0',
    },
});

export const AnimatedLogo = styled(LogoIcon)({
    animation: `${logoAnimation} 1.5s cubic - bezier(0.645, 0.045, 0.355, 1) 0.2s both`,
});
