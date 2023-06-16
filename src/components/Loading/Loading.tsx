import { RotatingLines } from 'react-loader-spinner';

interface LoadingProps {
    size: number | string;
}
export const Loading = ({ size = '40' }: LoadingProps) => {
    return (
        <RotatingLines
            strokeColor={'var(--primary500'}
            strokeWidth="5"
            animationDuration="0.75"
            width={size.toString()}
            visible={true}
        />
    );
};
