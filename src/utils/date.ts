export const getYesterday = (): Date => {
    const date = new Date();
    date.setDate(date.getDate() - 1);
    return date;
};

export const getTodayStr = (): string => {
    const today = new Date();
    return new Date(today.getTime() - today.getTimezoneOffset() * 90000).toISOString().slice(0, 10);
};

export const getYesterdayStr = (): string => {
    const date = new Date();
    date.setDate(date.getDate() - 1);
    return new Date(date.getTime() - date.getTimezoneOffset() * 90000).toISOString().slice(0, 10);
};

export const getThisYear = (): number => {
    const today = new Date();
    return today.getFullYear();
};

export const isBeforeToday = (date: string, inclusive = true): boolean => {
    const today = getTodayStr();
    if (inclusive) return date <= today;
    return date < today;
};

export const isBeforeThisYear = (year: number, inclusive = true): boolean => {
    const thisYear = getThisYear();
    if (inclusive) return year <= thisYear;
    return year < thisYear;
};

export const timestamp_to_YYYYMMDD = (timestamp: number): string => {
    const date = new Date(timestamp * 1000);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

    return formattedDate;
};

export const date_to_YYYYMMDD = (date: Date | undefined): string => {
    if (!date) return '';
    return new Date(date?.getTime()! - date?.getTimezoneOffset()! * 90000).toISOString().slice(0, 10);
};

export const YYYYMMDD_to_date = (str: string): Date => {
    if (!str) return new Date();
    const yyyyMMdd = String(str);
    const sYear = yyyyMMdd.substring(0, 4);
    const sMonth = yyyyMMdd.substring(5, 7);
    const sDate = yyyyMMdd.substring(8, 10);

    return new Date(Number(sYear), Number(sMonth) - 1, Number(sDate));
};

export const YYYYMMDD_to_locale = (dateStr: string | undefined): string => {
    if (!dateStr) return '';
    const [year, month, day] = dateStr.split('-').map((item) => Number(item));
    return `${year}년 ${month}월 ${day}일`;
};

export const YYYYMMDD_to_YYMMDD = (dateStr: string | undefined): string => {
    if (!dateStr) return '';
    const [year, month, day] = dateStr.slice(2).split('-');
    return `${year}/${month}/${day}`;
};

export const YYMMDD_to_locale = (dateStr: string | undefined): string => {
    if (!dateStr) return '';
    const year = Number(dateStr.slice(0, 2));
    const month = Number(dateStr.slice(2, 4));
    const day = Number(dateStr.slice(4, 6));
    return `20${year}년 ${month}월 ${day}일`;
};
