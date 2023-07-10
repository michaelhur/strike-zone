import { SVGIcon } from '@components/@shared/Icon/Icon.styles';

import { IIcon } from '@typings/icon';

export const SidebarOpenIcon = ({
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
                transform="translate(3 3)"
            >
                <path d="m6.5 10.5 3-3-3-3"></path>
                <path d="m5 3v9" transform="matrix(0 1 -1 0 12.5 2.5)"></path>
                <path d="m1.5 5.5v-3.0079176c0-1.10147263.89060277-1.99561512 1.99206673-1.99998427l7.95228497-.03160773c1.1045608-.00432011 2.0035361.8875515 2.0079175 1.99211231l.0398162 10.02918369c.0043323 1.1045608-.8875404 2.003535-1.9921012 2.0079309-.0026436 0-.0052873 0-.0079309 0h-7.9920533c-1.1045695 0-2-.8954305-2-2v-2.9897173"></path>
            </g>
        </SVGIcon>
    );
};
