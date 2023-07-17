import { ThreeCircles } from 'react-loader-spinner';

import { css } from '@emotion/react';

import { FlexRowContainer } from '@components/Layout/Layout.styles';

export interface LoadingProps {
    size: number | string;
}

export const Loading = ({ size = '60' }: LoadingProps) => {
    return (
        <FlexRowContainer css={css({ justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%' })}>
            <ThreeCircles
                height={size}
                width={size}
                color="var(--primary500)"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="three-circles-rotating"
                outerCircleColor=""
                innerCircleColor=""
                middleCircleColor=""
            />
        </FlexRowContainer>
    );
};
