import { SVGIcon } from '@components/@shared/Icon/Icon.styles';

import { IIcon } from '@typings/icon';

export const ToggleUpIcon = ({
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
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={onClickIcon}
        >
            <path
                d="M17.7018 13.7632C17.9006 13.9386 18 14.1725 18 14.4649C18 14.7339 17.9006 14.9678 17.7018 15.1667C17.5146 15.3655 17.2807 15.4649 17 15.4649C16.7193 15.4649 16.4854 15.3655 16.2982 15.1667L11.4035 10.2719C11.345 10.2135 11.4269 10.1725 11.6491 10.1491C11.883 10.1257 12.1111 10.1257 12.3333 10.1491C12.5673 10.1725 12.655 10.2135 12.5965 10.2719L7.70175 15.1667C7.52632 15.3655 7.2924 15.4649 7 15.4649C6.73099 15.4649 6.49708 15.3655 6.29825 15.1667C6.09942 14.9678 6 14.7339 6 14.4649C6 14.1725 6.09942 13.9386 6.29825 13.7632L11.193 8.86843C11.4152 8.64621 11.6842 8.5351 12 8.5351C12.3275 8.5351 12.5965 8.64621 12.807 8.86843L17.7018 13.7632Z"
                fill={color}
            />
        </SVGIcon>
    );
};
