import { ThreeCircles } from 'react-loader-spinner';

import { css } from '@emotion/react';

import { RowPageContainer } from '@components/Layout/Layout';

export interface LoadingProps {
    size: number | string;
}

export const Loading = ({ size = '60' }: LoadingProps) => {
    return (
        <RowPageContainer css={css({ justifyContent: 'center', alignItems: 'center' })}>
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
        </RowPageContainer>
    );
};
