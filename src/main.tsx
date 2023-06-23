import React from 'react';
import ReactDOM from 'react-dom/client';

import { Global } from '@emotion/react';
import { RecoilRoot } from 'recoil';

import { globalStyle } from '@styles/globalStyle';

import { worker } from '../__mocks__/browser';
import App from './App';

if (import.meta.env.MODE === 'development') {
    worker.start();
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <RecoilRoot>
        <Global styles={globalStyle} />
        <App />
    </RecoilRoot>,
);
