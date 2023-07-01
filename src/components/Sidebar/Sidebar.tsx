import { useState } from 'react';

import { sidebarMenu } from '@constants/menu';
import { useRecoilState, useRecoilValue } from 'recoil';

import { DarkIcon, LightIcon } from '@components/@shared/Icon';
import { IconWrap } from '@components/@shared/Icon/Icon.styles';
import { RadioButton } from '@components/@shared/RadioButton/RadioButton';
import {
    BottomSection,
    Logo,
    LogoSection,
    MenuItem,
    MenuList,
    MenuSection,
    SidebarContainer,
    StyledTitle,
    TopSection,
} from '@components/Sidebar/Sidebar.styles';

import { themeState } from '@recoils/sidebar/atom';
import { sidebarCollapseState } from '@recoils/sidebar/atom';

export const Sidebar = () => {
    const isSidebarOpen = useRecoilValue(sidebarCollapseState);
    const [theme, setTheme] = useRecoilState(themeState);
    const [selected, setSelected] = useState<boolean>(theme === 'dark');

    const onClickThemeChanger = () => {
        if (theme === 'dark') {
            setSelected(false);
            setTheme('light');
            localStorage.setItem('sz-theme', 'light');
        } else {
            setSelected(true);
            setTheme('dark');
            localStorage.setItem('sz-theme', 'dark');
        }
    };

    return (
        <SidebarContainer isSidebarOpen={isSidebarOpen}>
            <TopSection>
                <LogoSection>
                    <Logo to={'/'}>
                        <img src="/sz_logo.svg" alt="Logo" height={32} width={32} />
                        {isSidebarOpen && <StyledTitle>스트라이크 존</StyledTitle>}
                    </Logo>
                </LogoSection>
                <MenuSection>
                    <MenuList>
                        {sidebarMenu.map((menu) => {
                            return (
                                <li key={menu.name}>
                                    <MenuItem to={menu.path}>
                                        {menu.iconComponent && <IconWrap>{menu.iconComponent}</IconWrap>}
                                        {isSidebarOpen && <span>{menu.name}</span>}
                                    </MenuItem>
                                </li>
                            );
                        })}
                    </MenuList>
                </MenuSection>
            </TopSection>
            <BottomSection>
                <RadioButton
                    selected={selected}
                    onClickRadioButton={onClickThemeChanger}
                    leftButtonLabel={'Light'}
                    rightButtonLabel={'Dark'}
                    leftIconComponent={<LightIcon color={!selected ? 'var(--grey900)' : 'var(--grey500)'} />}
                    rightIconComponent={<DarkIcon color={selected ? 'var(--grey900)' : 'var(--grey500)'} />}
                />
            </BottomSection>
        </SidebarContainer>
    );
};
