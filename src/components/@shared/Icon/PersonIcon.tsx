import { SVGIcon } from '@components/@shared/Icon/Icon.styles';

import { IIcon } from '@typings/icon';

export const PersonIcon = ({ size = 24, color = 'var(--grey1000)', hoverable = false }: IIcon) => {
    return (
        <SVGIcon
            color={color}
            hoverable={hoverable}
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M9.56338 7.98592C9.56338 8.46479 9.66667 8.88732 9.87324 9.25352C10.0798 9.61972 10.3662 9.9061 10.7324 10.1127C11.0986 10.3192 11.5211 10.4225 12 10.4225C12.4789 10.4225 12.9014 10.3192 13.2676 10.1127C13.6338 9.9061 13.9202 9.61972 14.1268 9.25352C14.3333 8.88732 14.4366 8.46479 14.4366 7.98592C14.4366 7.50704 14.3333 7.08451 14.1268 6.71831C13.9202 6.35211 13.6338 6.06573 13.2676 5.85916C12.9014 5.65258 12.4789 5.5493 12 5.5493C11.5211 5.5493 11.0986 5.65258 10.7324 5.85916C10.3662 6.06573 10.0798 6.35211 9.87324 6.71831C9.66667 7.08451 9.56338 7.50704 9.56338 7.98592ZM8.01408 7.98592C8.01408 7.26291 8.19249 6.59624 8.5493 5.98592C8.9061 5.37559 9.38967 4.89202 10 4.53521C10.6103 4.1784 11.277 4 12 4C12.723 4 13.3897 4.1784 14 4.53521C14.6103 4.89202 15.0939 5.37559 15.4507 5.98592C15.8075 6.59624 15.9859 7.26291 15.9859 7.98592C15.9859 8.70892 15.8075 9.37559 15.4507 9.98592C15.0939 10.5962 14.6103 11.0798 14 11.4366C13.3897 11.7934 12.723 11.9718 12 11.9718C11.277 11.9718 10.6103 11.7934 10 11.4366C9.38967 11.0798 8.9061 10.5962 8.5493 9.98592C8.19249 9.37559 8.01408 8.70892 8.01408 7.98592ZM5.5493 16.8169C5.5493 17.1455 5.61502 17.4366 5.74648 17.6901C5.87793 17.9343 6.06573 18.1221 6.30986 18.2535C6.56338 18.385 6.85446 18.4507 7.1831 18.4507H16.8169C17.1455 18.4507 17.4319 18.385 17.6761 18.2535C17.9296 18.1221 18.1221 17.9343 18.2535 17.6901C18.385 17.4366 18.4507 17.1455 18.4507 16.8169C18.4507 16.385 18.1737 15.9859 17.6197 15.6197C17.0751 15.2441 16.3099 14.9437 15.3239 14.7183C14.3474 14.493 13.2394 14.3803 12 14.3803C10.7606 14.3803 9.64789 14.493 8.66197 14.7183C7.68545 14.9437 6.92019 15.2441 6.3662 15.6197C5.8216 15.9859 5.5493 16.385 5.5493 16.8169ZM4 16.8169C4 16.0376 4.3615 15.3474 5.08451 14.7465C5.8169 14.1362 6.79343 13.6667 8.01408 13.338C9.24413 13 10.5728 12.831 12 12.831C13.4272 12.831 14.7512 13 15.9718 13.338C17.2019 13.6667 18.1784 14.1362 18.9014 14.7465C19.6338 15.3474 20 16.0376 20 16.8169C20 17.3897 19.8545 17.9202 19.5634 18.4085C19.2817 18.8967 18.8967 19.2864 18.4085 19.5775C17.9202 19.8592 17.3897 20 16.8169 20H7.1831C6.61033 20 6.07981 19.8592 5.59155 19.5775C5.10329 19.2864 4.71361 18.8967 4.42254 18.4085C4.14085 17.9202 4 17.3897 4 16.8169Z"
                fill={color}
            />
        </SVGIcon>
    );
};