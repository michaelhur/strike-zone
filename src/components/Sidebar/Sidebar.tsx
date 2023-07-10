import { useState } from 'react';

import { sidebarMenu } from '@constants/menu';
import { useRecoilState } from 'recoil';

import { DarkIcon, LightIcon, SidebarCloseIcon, SidebarOpenIcon } from '@components/@shared/Icon';
import { IconWrap } from '@components/@shared/Icon/Icon.styles';
import { RadioButton } from '@components/@shared/RadioButton/RadioButton';
import {
    BottomSection,
    Logo,
    LogoSection,
    MenuItem,
    MenuList,
    MenuSection,
    SidebarButtonWrap,
    SidebarContainer,
    TopSection,
} from '@components/Sidebar/Sidebar.styles';

import { themeState } from '@recoils/sidebar/atom';
import { sidebarCollapseState } from '@recoils/sidebar/atom';

export const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useRecoilState(sidebarCollapseState);
    const [theme, setTheme] = useRecoilState(themeState);
    const [selected, setSelected] = useState<boolean>(theme === 'dark');

    const onClickSidebarButton = () => setIsSidebarOpen(!isSidebarOpen);

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
                    {isSidebarOpen ? (
                        <>
                            <Logo to={'/'}>
                                <img
                                    src={'/sz_logo_full.svg'}
                                    alt="Logo"
                                    height={24}
                                    // width={32}
                                />
                            </Logo>
                            <SidebarCloseIcon size={24} onClickIcon={onClickSidebarButton} />
                        </>
                    ) : (
                        <SidebarOpenIcon size={24} onClickIcon={onClickSidebarButton} />
                    )}
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
                {isSidebarOpen ? (
                    <RadioButton
                        selected={selected}
                        onClickRadioButton={onClickThemeChanger}
                        leftButtonLabel={'Light'}
                        rightButtonLabel={'Dark'}
                        leftIconComponent={<LightIcon color={!selected ? 'var(--grey900)' : 'var(--grey500)'} />}
                        rightIconComponent={<DarkIcon color={selected ? 'var(--grey900)' : 'var(--grey500)'} />}
                    />
                ) : (
                    <SidebarButtonWrap onClick={onClickThemeChanger}>
                        {selected ? (
                            <DarkIcon color={selected ? 'var(--grey900)' : 'var(--grey500)'} hoverable={false} />
                        ) : (
                            <LightIcon color={!selected ? 'var(--grey900)' : 'var(--grey500)'} hoverable={false} />
                        )}
                    </SidebarButtonWrap>
                )}
            </BottomSection>
        </SidebarContainer>
    );
};
