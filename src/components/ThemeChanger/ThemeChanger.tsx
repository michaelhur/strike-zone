import { useCallback, useState } from 'react';

import { useRecoilState, useRecoilValue } from 'recoil';

import { DarkIcon, LightIcon } from '@components/@shared/Icon';
import { RadioButton } from '@components/@shared/RadioButton/RadioButton';
import { SidebarButtonWrap } from '@components/Sidebar/Sidebar.styles';

import { useLocalStorage } from '@hooks/common/useLocalStorage';

import { sidebarCollapseState, themeState } from '@recoils/sidebar/atom';

export const ThemeChanger = () => {
    const [theme, setTheme] = useRecoilState(themeState);
    const [selected, setSelected] = useState<boolean>(theme === 'dark');

    const isSidebarOpen = useRecoilValue(sidebarCollapseState);
    const [_, setStoredThemeState] = useLocalStorage('sz-theme', 'light');

    const onClickThemeChanger = useCallback(() => {
        const newThemeState = theme === 'dark' ? 'light' : 'dark';
        setSelected(newThemeState === 'dark');
        setTheme(newThemeState);
        setStoredThemeState(newThemeState);
    }, [theme]);

    switch (isSidebarOpen) {
        case 'opened':
            return (
                <RadioButton
                    selected={selected}
                    onClickRadioButton={onClickThemeChanger}
                    leftButtonLabel={'Light'}
                    rightButtonLabel={'Dark'}
                    leftIconComponent={<LightIcon color={!selected ? 'var(--grey900)' : 'var(--grey500)'} />}
                    rightIconComponent={<DarkIcon color={selected ? 'var(--grey900)' : 'var(--grey500)'} />}
                />
            );
        default:
            return (
                <SidebarButtonWrap onClick={onClickThemeChanger}>
                    {selected ? (
                        <DarkIcon color={selected ? 'var(--grey900)' : 'var(--grey500)'} hoverable={false} />
                    ) : (
                        <LightIcon color={!selected ? 'var(--grey900)' : 'var(--grey500)'} hoverable={false} />
                    )}
                </SidebarButtonWrap>
            );
    }
};
