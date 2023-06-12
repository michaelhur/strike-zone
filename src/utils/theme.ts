import { ModeTheme } from '@typings/theme';

export const getTheme = (): ModeTheme => {
    const theme = <ModeTheme>localStorage.getItem('theme');
    return theme || null;
};
