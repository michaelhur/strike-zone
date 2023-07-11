import { useRef } from 'react';

export const useThrottle = (callback: (...input: unknown[]) => unknown, delay: number) => {
    const timerID = useRef<NodeJS.Timeout | null>();

    return function () {
        if (timerID.current) {
            return;
        }

        callback();

        timerID.current = setTimeout(() => {
            timerID.current = null;
        }, delay);
    };
};
