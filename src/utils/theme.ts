import { ModeTheme } from '@typings/theme';

export const getTheme = (): ModeTheme => {
    const theme = <ModeTheme>localStorage.getItem('sz-theme');
    return theme || null;
};
