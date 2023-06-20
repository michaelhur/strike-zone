import { SVGIcon } from '@components/@shared/Icon/Icon.styles';

import { IIcon } from '@typings/icon';

export const AvatarIcon = ({ size = 24, color = 'var(--grey1000)', hoverable = false, onClickIcon }: IIcon) => {
    return (
        <SVGIcon
            color={color}
            hoverable={hoverable}
            width={size}
            height={size}
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={onClickIcon}
        >
            <path
                d="M10.9997 2.00005C6.03188 2.00005 2 6.03217 2 11.0003C2 15.9685 6.03188 20.0006 10.9997 20.0006C15.9676 20.0006 19.9995 15.9685 19.9995 11.0003C19.9995 6.03217 15.9676 2.00005 10.9997 2.00005ZM10.9997 4.70013C12.4937 4.70013 13.6997 5.90617 13.6997 7.40021C13.6997 8.89426 12.4937 10.1003 10.9997 10.1003C9.50578 10.1003 8.29982 8.89426 8.29982 7.40021C8.29982 5.90617 9.50578 4.70013 10.9997 4.70013ZM10.9997 17.4805C8.7498 17.4805 6.76086 16.3285 5.5999 14.5824C5.62689 12.7914 9.19979 11.8103 10.9997 11.8103C12.7907 11.8103 16.3726 12.7914 16.3996 14.5824C15.2386 16.3285 13.2497 17.4805 10.9997 17.4805Z"
                fill={color}
            />
        </SVGIcon>
    );
};
