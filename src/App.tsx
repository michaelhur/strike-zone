import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { Sidebar } from '@components/Sidebar/Sidebar';

import Router from '@src/Router';
import { getClient } from '@src/queryClient';

function App() {
    const queryClient = getClient();
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Sidebar />
                {/*<Router />*/}
            </BrowserRouter>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}

export default App;
