import { QueryClient } from '@tanstack/react-query';

export const getClient = (() => {
    let client: QueryClient | null = null;
    return () => {
        if (!client)
            client = new QueryClient({
                defaultOptions: {
                    queries: {
                        cacheTime: 1000 * 60 * 5,
                        staleTime: 1000 * 60 * 30,
                        refetchOnMount: false,
                        refetchOnReconnect: false,
                        refetchOnWindowFocus: false,
                    },
                },
            });
        return client;
    };
})();
