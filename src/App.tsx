import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useRecoilValue } from 'recoil';

import { Layout } from '@components/Layout/Layout';
import { MobileHeader } from '@components/MobileHeader/MobileHeader';
import { MobileMenu } from '@components/MobileMenu/MobileMenu';
import { Sidebar } from '@components/Sidebar/Sidebar';

import { useResponsive } from '@hooks/common/useResponsive';

import { themeState } from '@recoils/sidebar/atom';

import Router from '@src/Router';
import { getClient } from '@src/queryClient';

function App() {
    const theme = useRecoilValue(themeState);
    const isMobile = !useResponsive(600);

    useEffect(() => {
        if (theme === 'dark') document.body.classList.add('dark-mode');
        else document.body.classList.remove('dark-mode');
    }, [theme]);

    const queryClient = getClient();
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                {isMobile && <MobileHeader />}
                <Layout>
                    <Sidebar />
                    <Router />
                </Layout>
                {isMobile && <MobileMenu />}
            </BrowserRouter>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}

export default App;
