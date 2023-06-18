import { RotatingLines } from 'react-loader-spinner';

import { css } from '@emotion/react';

import { RowPageContainer } from '@components/Layout/Layout';

interface LoadingProps {
    size: number | string;
}
export const Loading = ({ size = '40' }: LoadingProps) => {
    return (
        <RowPageContainer css={css({ justifyContent: 'center', alignItems: 'center' })}>
            <RotatingLines
                strokeColor={'var(--primary500'}
                strokeWidth="5"
                animationDuration="1.5"
                width={size.toString()}
                visible={true}
            />
        </RowPageContainer>
    );
};
