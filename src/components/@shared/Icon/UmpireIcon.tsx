import { SVGIcon } from '@components/@shared/Icon/Icon.styles';

import { IIcon } from '@typings/icon';

export const UmpireIcon = ({
    size = 24,
    color = 'var(--grey1000)',
    opacity = 1,
    hoverable = false,
    onClickIcon,
}: IIcon) => {
    return (
        <SVGIcon
            color={color}
            hoverable={hoverable}
            width={size}
            height={size}
            viewBox="-35.25 -35.25 423.04 423.04"
            fill={color}
            xmlns="http://www.w3.org/2000/svg"
            onClick={onClickIcon}
        >
            <g>
                <path d="M104.526,71.751C46.798,71.751,0,118.543,0,176.271c0,57.724,46.798,104.525,104.526,104.525 c50.794,0,93.021-36.269,102.447-84.301c0.648-3.333,1.039-6.203,1.087-6.354c0.024-0.09,0.055-0.174,0.078-0.282 c15.589-63.684,117.622-68.371,140.002-68.635c0,0,0.979,0,2.204,0c1.213,0,2.197-2.753,2.197-6.149V77.894 c0-3.393-2.75-6.149-6.148-6.149h-154.75v25.733h-27.67V71.745h-59.447V71.751z"></path>
            </g>
        </SVGIcon>
    );
};
