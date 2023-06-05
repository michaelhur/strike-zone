import { css } from '@emotion/react';

import { Reset } from '@styles/reset';

import { theme } from './theme';

export const globalStyle = css`
    ${Reset()}

    :root {
        letter-spacing: -0.03px;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: inherit;
    }

    body {
        margin: 0 auto;
        overflow-x: hidden;
        overflow-y: scroll;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
    ol,
    ul {
        list-style: none;
    }
    li {
        list-style: none;
    }
    button {
        cursor: pointer;
        border: 0;
        background-color: inherit;
    }
    div {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }
    div::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
    }
    span {
        line-height: 1.5;
    }
    textarea {
        font-size: 16px;
    }
`;
