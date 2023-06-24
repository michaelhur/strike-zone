import { Global } from '@emotion/react';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import type { Preview } from '@storybook/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';

import { worker } from '../__mocks__/browser';
import { getClient } from '../src/queryClient';
import { globalStyle } from '../src/styles/globalStyle';

// const GlobalStyles = () => <Global styles={globalStyle} />;
const queryClient = getClient();

export const decorators = [
    // withThemeFromJSXProvider({
    //     GlobalStyles, // Adds your GlobalStyles component to all stories
    // }),
    (Story) => (
        <RecoilRoot>
            <QueryClientProvider client={queryClient}>
                <Global styles={globalStyle} />
                <Story />
            </QueryClientProvider>
        </RecoilRoot>
    ),
];

worker.start({
    onUnhandledRequest: 'bypass',
});

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            sort: 'requiredFirst', // 추가
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
};

export default preview;
