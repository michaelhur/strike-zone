import { SVGIcon } from '@components/@shared/Icon/Icon.styles';

import { IIcon } from '@typings/icon';

export const CardViewIcon = ({ size = 24, color = 'var(--grey1000)', hoverable = false, onClickIcon }: IIcon) => {
    return (
        <SVGIcon
            color={color}
            hoverable={hoverable}
            width={size}
            height={size}
            viewBox="-4.8 -4.8 33.60 33.60"
            fill={color}
            xmlns="http://www.w3.org/2000/svg"
            onClick={onClickIcon}
        >
            <g>
                <rect
                    fill={color}
                    height="7"
                    stroke={color}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    width="7"
                    x="14.5"
                    y="2.5"
                ></rect>
                <rect
                    fill={color}
                    height="7"
                    stroke={color}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    width="7"
                    x="14.5"
                    y="14.5"
                ></rect>
                <rect
                    fill={color}
                    height="7"
                    stroke={color}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    width="7"
                    x="2.5"
                    y="2.5"
                ></rect>
                <rect
                    fill={color}
                    height="7"
                    stroke={color}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    width="7"
                    x="2.5"
                    y="14.5"
                ></rect>
            </g>
        </SVGIcon>
    );
};
