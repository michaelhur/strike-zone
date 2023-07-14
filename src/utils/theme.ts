import { ModeTheme } from '@typings/theme';

export const getTheme = (): ModeTheme => {
    const theme = localStorage.getItem('sz-theme') as ModeTheme;
    return JSON.parse(theme) || 'light';
};
