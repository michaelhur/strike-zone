import { SVGIcon } from '@components/@shared/Icon/Icon.styles';

import { IIcon } from '@typings/icon';

export const ArrowLeftIcon = ({
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
                d="M15.1579 16.2982C15.3567 16.4737 15.4561 16.7076 15.4561 17C15.4561 17.269 15.3567 17.5029 15.1579 17.7018C14.9708 17.9006 14.7368 18 14.4561 18C14.1754 18 13.9415 17.9006 13.7544 17.7018L8.85964 12.807C8.64912 12.5848 8.54385 12.3158 8.54385 12C8.54385 11.6725 8.64912 11.4035 8.85964 11.193L13.7544 6.29825C13.9415 6.09942 14.1754 6 14.4561 6C14.7368 6 14.9708 6.09942 15.1579 6.29825C15.3567 6.48538 15.4561 6.7193 15.4561 7C15.4561 7.2807 15.3567 7.51462 15.1579 7.70175L10.2632 12.5965C10.2047 12.655 10.1637 12.5731 10.1403 12.3509C10.117 12.117 10.117 11.8889 10.1403 11.6667C10.1637 11.4327 10.2047 11.345 10.2632 11.4035L15.1579 16.2982Z"
                fill={color}
            />
        </SVGIcon>
    );
};
