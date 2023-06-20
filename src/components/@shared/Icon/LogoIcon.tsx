import { SVGIcon } from '@components/@shared/Icon/Icon.styles';

import { IIcon } from '@typings/icon';

export const LogoIcon = ({ size = 24, color = '#0040f0', hoverable = false, onClickIcon }: IIcon) => {
    return (
        <SVGIcon
            color={color}
            hoverable={hoverable}
            width={size}
            height={size}
            fill="none"
            viewBox="9.636625289916992 9.630833625793457 80.72662353515625 80.73622131347656"
            enable-background="new 0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            onClick={onClickIcon}
        >
            <path
                fill="#0040f0"
                d="M27.503 37.012C23.421 44.084 16.922 48.881 9.65 50.97c-0.185-7.172 1.546-14.489 5.393-21.153 3.848-6.663 9.318-11.819 15.621-15.246C32.492 21.913 31.587 29.939 27.503 37.012z"
                data-fill-palette-color="accent"
            ></path>
            <path
                fill="#0040f0"
                d="M63.757 57.942c-5.676 9.832-6.742 21.063-3.875 31.189-9.824 2.482-20.595 1.293-30.066-4.174-9.47-5.467-15.886-14.201-18.646-23.951 10.205-2.58 19.398-9.119 25.072-18.95 5.676-9.83 6.744-21.061 3.875-31.188 9.824-2.484 20.593-1.294 30.066 4.174 9.469 5.467 15.887 14.199 18.648 23.951C78.624 41.573 69.433 48.112 63.757 57.942z"
                data-fill-palette-color="accent"
            ></path>
            <path
                fill="#0040f0"
                d="M84.956 70.183c-3.848 6.664-9.316 11.82-15.621 15.246-1.828-7.342-0.922-15.367 3.16-22.441 4.082-7.072 10.582-11.869 17.855-13.958C90.534 56.202 88.804 63.521 84.956 70.183z"
                data-fill-palette-color="accent"
            ></path>
        </SVGIcon>
    );
};
