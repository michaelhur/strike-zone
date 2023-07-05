import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useRecoilValue } from 'recoil';

import { Layout } from '@components/Layout/Layout';
import { Sidebar } from '@components/Sidebar/Sidebar';

import { themeState } from '@recoils/sidebar/atom';

import Router from '@src/Router';
import { getClient } from '@src/queryClient';

function App() {
    const theme = useRecoilValue(themeState);
    useEffect(() => {
        if (theme === 'dark') document.body.classList.add('dark-mode');
        else document.body.classList.remove('dark-mode');
    }, [theme]);

    const queryClient = getClient();
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Layout>
                    <Sidebar />
                    <Router />
                </Layout>
            </BrowserRouter>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}

export default App;
