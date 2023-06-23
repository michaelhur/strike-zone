if (typeof window === 'undefined') {
    const server = import('./server');
    server.then((s) =>
        s.server.listen({
            onUnhandledRequest: 'bypass',
        }),
    );
} else {
    const worker = import('./browser');
    worker.then((w) =>
        w.worker.start({
            onUnhandledRequest: 'bypass',
        }),
    );
}

export {};
