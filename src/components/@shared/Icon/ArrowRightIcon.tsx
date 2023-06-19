import { SVGIcon } from '@components/@shared/Icon/Icon.styles';

import { IIcon } from '@typings/icon';

export const ArrowRightIcon = ({ size = 24, color = 'var(--grey1000)', hoverable = false, onClickIcon }: IIcon) => {
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
                d="M10.2368 17.7018C10.0614 17.9006 9.82749 18 9.53509 18C9.26609 18 9.03217 17.9006 8.83334 17.7018C8.63451 17.5029 8.5351 17.269 8.5351 17C8.5351 16.7076 8.63451 16.4737 8.83334 16.2982L13.7281 11.4035C13.7866 11.345 13.8275 11.4327 13.8509 11.6667C13.8743 11.8889 13.8743 12.117 13.8509 12.3509C13.8275 12.5731 13.7866 12.655 13.7281 12.5965L8.83334 7.70175C8.63451 7.51462 8.5351 7.2807 8.5351 7C8.5351 6.7193 8.63451 6.48538 8.83334 6.29825C9.03217 6.09942 9.26609 6 9.53509 6C9.82749 6 10.0614 6.09942 10.2368 6.29825L15.1316 11.193C15.3538 11.4035 15.4649 11.6725 15.4649 12C15.4649 12.3158 15.3538 12.5848 15.1316 12.807L10.2368 17.7018Z"
                fill={color}
            />
        </SVGIcon>
    );
};
