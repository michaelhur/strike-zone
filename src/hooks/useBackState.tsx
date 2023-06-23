import { useEffect, useState } from 'react';

const useBackState = <T,>(initialState: T): [T, (state: T) => void] => {
    const [state, setState] = useState<T>(initialState);

    useEffect(() => {
        const handlePopstate = () => {
            const restoredState = sessionStorage.getItem('backState');
            if (restoredState) {
                setState(JSON.parse(restoredState));
            }
        };

        window.addEventListener('popstate', handlePopstate);

        return () => {
            window.removeEventListener('popstate', handlePopstate);
        };
    }, []);

    const setBackState = (newState: T) => {
        setState(newState);
        sessionStorage.setItem('backState', JSON.stringify(newState));
    };

    return [state, setBackState];
};

export default useBackState;
