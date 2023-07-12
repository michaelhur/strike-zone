import { RecoilState, useRecoilState } from 'recoil';

export const useLocalStorage = <T,>(
    recoilState: RecoilState<T>,
    key: string,
    initialValue: T,
): [T, (value: T) => void] => {
    const [storedValue, setStoredValue] = useRecoilState<T>(recoilState);

    // Ensuring the initial value is set in the Recoil state
    if (storedValue === undefined) {
        try {
            const item = window.localStorage.getItem(key);
            const valueToStore = item ? JSON.parse(item) : initialValue;
            setStoredValue(valueToStore);
        } catch (error) {
            console.log(error);
            setStoredValue(initialValue);
        }
    }

    const setValue = (value: T) => {
        try {
            setStoredValue(value);
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.log(error);
        }
    };

    return [storedValue, setValue];
};
