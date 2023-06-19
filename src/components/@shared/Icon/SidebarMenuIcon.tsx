import { SVGIcon } from '@components/@shared/Icon/Icon.styles';

import { IIcon } from '@typings/icon';

export const SidebarMenuIcon = ({ size = 24, color = 'var(--grey1000)', hoverable = false, onClickIcon }: IIcon) => {
    return (
        <SVGIcon
            color={color}
            hoverable={hoverable}
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={onClickIcon}
        >
            <path
                d="M4 6C3.73099 6 3.49708 5.90058 3.29825 5.70175C3.09942 5.50292 3 5.269 3 5C3 4.7193 3.09942 4.48538 3.29825 4.29824C3.49708 4.09941 3.73099 4 4 4H20C20.2807 4 20.5146 4.09941 20.7018 4.29824C20.9006 4.48538 21 4.7193 21 5C21 5.269 20.9006 5.50292 20.7018 5.70175C20.5146 5.90058 20.2807 6 20 6H4ZM4 13C3.73099 13 3.49708 12.9006 3.29825 12.7018C3.09942 12.5029 3 12.269 3 12C3 11.7193 3.09942 11.4854 3.29825 11.2982C3.49708 11.0994 3.73099 11 4 11H20C20.2807 11 20.5146 11.0994 20.7018 11.2982C20.9006 11.4854 21 11.7193 21 12C21 12.269 20.9006 12.5029 20.7018 12.7018C20.5146 12.9006 20.2807 13 20 13H4ZM4 20C3.73099 20 3.49708 19.9006 3.29825 19.7018C3.09942 19.5029 3 19.269 3 19C3 18.7193 3.09942 18.4854 3.29825 18.2982C3.49708 18.0994 3.73099 18 4 18H20C20.2807 18 20.5146 18.0994 20.7018 18.2982C20.9006 18.4854 21 18.7193 21 19C21 19.269 20.9006 19.5029 20.7018 19.7018C20.5146 19.9006 20.2807 20 20 20H4Z"
                fill={color}
            />
        </SVGIcon>
    );
};
