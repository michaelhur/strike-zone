import { SVGIcon } from '@components/@shared/Icon/Icon.styles';

import { IIcon } from '@typings/icon';

export const SidebarCloseIcon = ({
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
            viewBox="0 0 21.00 21.00"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={onClickIcon}
            stroke="#000000"
            stroke-width="1.05"
        >
            <g
                fill="none"
                fillRule="evenodd"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                transform="translate(4.5 3.508)"
            >
                <path d="m7 10.027-3-3.035 3-3"></path>
                <path d="m9 1.992v10" transform="matrix(0 1 -1 0 15.992 -2.008)"></path>
                <path d="m12 4.9918869v-2.95924861c0-1.10138928-.890473-1.99549696-1.9918531-1.99998341l-8.00000001-.03267133c-1.10456034-.0044159-2.00363089.88735968-2.00814689 1.99192002v.00814689 9.99183644c0 1.1045695.8954305 2 2 2h8c1.1045695 0 2-.8954305 2-2v-3"></path>
            </g>
        </SVGIcon>
    );
};
