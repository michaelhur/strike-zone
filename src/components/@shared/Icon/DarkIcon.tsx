import { SVGIcon } from '@components/@shared/Icon/Icon.styles';

import { IIcon } from '@typings/icon';

export const DarkIcon = ({ size = 24, color = 'var(--grey1000)', hoverable = false, onClickIcon }: IIcon) => {
    return (
        <SVGIcon
            color={color}
            hoverable={hoverable}
            width={size}
            height={size}
            viewBox="-4.8 -4.8 57.60 57.60"
            fill={color}
            xmlns="http://www.w3.org/2000/svg"
            onClick={onClickIcon}
        >
            <g>
                <path
                    className="c"
                    d="m32.8,29.3c-8.9-.8-16.2-7.8-17.5-16.6-.3-1.8-.3-3.7,0-5.4.2-1.4-1.4-2.3-2.5-1.6C6.3,9.7,2.1,16.9,2.5,25c.5,10.7,9,19.5,19.7,20.4,10.6.9,19.8-6,22.5-15.6.4-1.4-1-2.6-2.3-2-2.9,1.3-6.1,1.8-9.6,1.5Z"
                ></path>
            </g>
        </SVGIcon>
    );
};
