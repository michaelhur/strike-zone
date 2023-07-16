import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';

import { Global } from '@emotion/react';
import { RecoilRoot } from 'recoil';

import { globalStyle } from '@styles/globalStyle';

import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <HelmetProvider>
        <RecoilRoot>
            <Global styles={globalStyle} />
            <App />
        </RecoilRoot>
    </HelmetProvider>,
);
