import { css } from '@emotion/react';

import { Reset } from '@styles/reset';

import { theme } from './theme';

export const globalStyle = css`
    ${Reset()}

    @font-face {
        font-family: 'BMHANNAPro';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_seven@1.0/BMHANNAPro.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'BMHANNAAir';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.0/BMHANNAAir.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    :root {
        letter-spacing: -0.03px;

        --primary100: ${theme.colors.light.primary_100};
        --primary200: ${theme.colors.light.primary_200};
        --primary300: ${theme.colors.light.primary_300};
        --primary400: ${theme.colors.light.primary_400};
        --primary500: ${theme.colors.light.primary_500};
        --primary600: ${theme.colors.light.primary_600};
        --primary700: ${theme.colors.light.primary_700};
        --primary800: ${theme.colors.light.primary_800};
        --primary900: ${theme.colors.light.primary_900};

        --grey0: ${theme.colors.light.white};
        --grey50: ${theme.colors.light.grey_50};
        --grey100: ${theme.colors.light.grey_100};
        --grey200: ${theme.colors.light.grey_200};
        --grey300: ${theme.colors.light.grey_300};
        --grey400: ${theme.colors.light.grey_400};
        --grey500: ${theme.colors.light.grey_500};
        --grey600: ${theme.colors.light.grey_600};
        --grey700: ${theme.colors.light.grey_700};
        --grey800: ${theme.colors.light.grey_800};
        --grey900: ${theme.colors.light.grey_900};
        --grey1000: ${theme.colors.light.black};

        --red: ${theme.colors.light.red};
        --orange: ${theme.colors.light.orange};
        --yellow: ${theme.colors.light.yellow};
        --green: ${theme.colors.light.green};
        --blue: ${theme.colors.light.blue};
        --pink: ${theme.colors.light.pink};

        --black: ${theme.colors.light.black};
        --white: ${theme.colors.light.white};

        --shadowUp: ${theme.shadow.up};
        --shadowDown: ${theme.shadow.down};
        --shadowCenter: ${theme.shadow.center};
        --shadowStrong: ${theme.shadow.strong};
    }

    .dark-mode {
        --primary100: ${theme.colors.dark.primary_100};
        --primary200: ${theme.colors.dark.primary_200};
        --primary300: ${theme.colors.dark.primary_300};
        --primary400: ${theme.colors.dark.primary_400};
        --primary500: ${theme.colors.dark.primary_500};
        --primary600: ${theme.colors.dark.primary_600};
        --primary700: ${theme.colors.dark.primary_700};
        --primary800: ${theme.colors.dark.primary_800};
        --primary900: ${theme.colors.dark.primary_900};

        --grey0: ${theme.colors.dark.black};
        --grey50: ${theme.colors.dark.grey_50};
        --grey100: ${theme.colors.dark.grey_100};
        --grey200: ${theme.colors.dark.grey_200};
        --grey300: ${theme.colors.dark.grey_300};
        --grey400: ${theme.colors.dark.grey_400};
        --grey500: ${theme.colors.dark.grey_500};
        --grey600: ${theme.colors.dark.grey_600};
        --grey700: ${theme.colors.dark.grey_700};
        --grey800: ${theme.colors.dark.grey_800};
        --grey900: ${theme.colors.dark.grey_900};
        --grey1000: ${theme.colors.dark.white};

        --red: ${theme.colors.dark.red};
        --orange: ${theme.colors.dark.orange};
        --yellow: ${theme.colors.dark.yellow};
        --green: ${theme.colors.dark.green};
        --blue: ${theme.colors.dark.blue};
        --pink: ${theme.colors.dark.pink};

        --black: ${theme.colors.dark.black};
        --white: ${theme.colors.dark.white};
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

        font-family: 'BMHANNAAir', 'BMHANNAPro';
        background-color: var(--grey50);
        color: var(--grey1000);

        width: 100%;
        @media (min-width: 1400px) {
            max-width: 1400px;
        }

        @media (max-width: 1400px) {
            max-width: 100vw;
        }
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
