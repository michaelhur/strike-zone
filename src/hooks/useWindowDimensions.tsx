import { useSyncExternalStore } from 'react';

export const useWindowDimensions = () => {
    return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};

const subscribe = (callback) => {
    window.addEventListener('resize', callback);
    return () => window.removeEventListener('resize', callback);
};

const getSnapshot = () => {
    return { width: window.innerWidth, height: window.innerHeight };
};

const getServerSnapshot = () => {
    return {
        width: 0,
        height: 0,
    };
};
