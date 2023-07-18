import { useCallback, useState } from 'react';

import { useRecoilValue } from 'recoil';

import { DarkIcon, LightIcon } from '@components/@shared/Icon';
import { RadioButton } from '@components/@shared/RadioButton/RadioButton';
import { SidebarButtonWrap } from '@components/Sidebar/Sidebar.styles';

import { useLocalStorage } from '@hooks/common/useLocalStorage';
import { useResponsive } from '@hooks/common/useResponsive';

import { sidebarCollapseState, themeState } from '@recoils/sidebar/atom';

export const ThemeChanger = () => {
    const isSidebarOpen = useRecoilValue(sidebarCollapseState);
    const [storedThemeState, setStoredThemeState] = useLocalStorage(themeState, 'sz-theme', 'light');
    const [selected, setSelected] = useState<boolean>(storedThemeState === 'dark');
    const isMobile = !useResponsive(600);

    const onClickThemeChanger = useCallback(() => {
        const newThemeState = storedThemeState === 'dark' ? 'light' : 'dark';
        setSelected(newThemeState === 'dark');
        setStoredThemeState(newThemeState);
    }, [storedThemeState]);

    if (isMobile)
        return (
            <SidebarButtonWrap onClick={onClickThemeChanger}>
                {selected ? (
                    <DarkIcon color={selected ? 'var(--grey900)' : 'var(--grey500)'} hoverable={false} />
                ) : (
                    <LightIcon color={!selected ? 'var(--grey900)' : 'var(--grey500)'} hoverable={false} />
                )}
            </SidebarButtonWrap>
        );

    switch (isSidebarOpen) {
        case 'opened':
            return (
                <RadioButton
                    selected={selected}
                    onClickRadioButton={onClickThemeChanger}
                    leftButtonLabel={'라이트'}
                    rightButtonLabel={'다크'}
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
