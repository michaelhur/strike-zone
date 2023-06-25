import { SVGIcon } from '@components/@shared/Icon/Icon.styles';

import { IIcon } from '@typings/icon';

export const ToggleDownIcon = ({
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
                d="M16.2982 8.8421C16.4854 8.64327 16.7193 8.54385 17 8.54385C17.2807 8.54385 17.5146 8.64327 17.7018 8.8421C17.9006 9.02923 18 9.26315 18 9.54385C18 9.82456 17.9006 10.0585 17.7018 10.2456L12.807 15.1403C12.5965 15.3509 12.3275 15.4561 12 15.4561C11.6842 15.4561 11.4152 15.3509 11.193 15.1403L6.29825 10.2456C6.09942 10.0585 6 9.82456 6 9.54385C6 9.26315 6.09942 9.02923 6.29825 8.8421C6.49708 8.64327 6.73099 8.54385 7 8.54385C7.2924 8.54385 7.52632 8.64327 7.70175 8.8421L12.5965 13.7368C12.655 13.7953 12.5673 13.8363 12.3333 13.8596C12.1111 13.883 11.883 13.883 11.6491 13.8596C11.4269 13.8363 11.345 13.7953 11.4035 13.7368L16.2982 8.8421Z"
                fill={color}
            />
        </SVGIcon>
    );
};
