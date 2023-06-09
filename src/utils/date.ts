export const getTodayStr = () => {
    const today = new Date();
    return new Date(today?.getTime()! - today?.getTimezoneOffset()! * 90000).toISOString().slice(0, 10);
};

export const isBeforeToday = (date: string, inclusive = true) => {
    const today = getTodayStr();
    if (inclusive) return date <= today;
    return date < today;
};

export const getThisYear = () => {
    const today = new Date();
    return today.getFullYear();
};

export const isBeforeThisYear = (year: number, inclusive = true) => {
    const thisYear = getThisYear();
    if (inclusive) return year <= thisYear;
    return year < thisYear;
};
