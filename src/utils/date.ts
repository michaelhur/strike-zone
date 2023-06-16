export const getYesterday = () => {
    const date = new Date();
    date.setDate(date.getDate() - 1);
    return date;
};

export const getTodayStr = () => {
    const today = new Date();
    return new Date(today.getTime() - today.getTimezoneOffset() * 90000).toISOString().slice(0, 10);
};

export const getYesterdayStr = () => {
    const date = new Date();
    date.setDate(date.getDate() - 1);
    return new Date(date.getTime() - date.getTimezoneOffset() * 90000).toISOString().slice(0, 10);
};

export const getThisYear = () => {
    const today = new Date();
    return today.getFullYear();
};

export const isBeforeToday = (date: string, inclusive = true) => {
    const today = getTodayStr();
    if (inclusive) return date <= today;
    return date < today;
};

export const isBeforeThisYear = (year: number, inclusive = true) => {
    const thisYear = getThisYear();
    if (inclusive) return year <= thisYear;
    return year < thisYear;
};

export const timestamp_to_YYYYMMDD = (timestamp: number) => {
    const date = new Date(timestamp * 1000);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

    return formattedDate;
};

export const createdAt_to_YYYYMMDD = (date: string) => {
    return date.substring(0, 10);
};

export const date_to_YYYYMMDD = (date: Date | undefined) => {
    if (!date) return '';
    return new Date(date?.getTime()! - date?.getTimezoneOffset()! * 90000).toISOString().slice(0, 10);
};

export const YYYYMMDD_to_date = (str: string) => {
    if (!str) return new Date();
    const yyyyMMdd = String(str);
    const sYear = yyyyMMdd.substring(0, 4);
    const sMonth = yyyyMMdd.substring(5, 7);
    const sDate = yyyyMMdd.substring(8, 10);

    return new Date(Number(sYear), Number(sMonth) - 1, Number(sDate));
};
