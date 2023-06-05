import { Global } from '@emotion/react';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import type { Preview } from '@storybook/react';

import { globalStyle } from '../src/styles/globalStyle';

const GlobalStyles = () => <Global styles={globalStyle} />;

export const decorators = [
    withThemeFromJSXProvider({
        GlobalStyles, // Adds your GlobalStyles component to all stories
    }),
];

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
};

export default preview;
