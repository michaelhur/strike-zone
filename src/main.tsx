import React from 'react';
import ReactDOM from 'react-dom/client';

import { Global } from '@emotion/react';
import { RecoilRoot } from 'recoil';

import { globalStyle } from '@styles/globalStyle';

import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RecoilRoot>
            <Global styles={globalStyle} />
            <App />
        </RecoilRoot>
    </React.StrictMode>,
);
