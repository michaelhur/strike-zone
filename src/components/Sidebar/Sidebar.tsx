import { menu } from '@constants/menu';
import { useRecoilValue } from 'recoil';

import { IconWrap } from '@components/@shared/Icon/Icon.styles';
import {
    BottomSection,
    MenuItem,
    MenuList,
    MenuSection,
    SidebarContainer,
    TopSection,
} from '@components/Sidebar/Sidebar.styles';
import { LogoSectionComponent } from '@components/Sidebar/components/LogoSectionComponent/LogoSectionComponent';
import { ThemeChanger } from '@components/ThemeChanger/ThemeChanger';

import { sidebarCollapseState } from '@recoils/sidebar/atom';

export const Sidebar = () => {
    const isSidebarOpen = useRecoilValue(sidebarCollapseState);

    return (
        <SidebarContainer isSidebarOpen={isSidebarOpen}>
            <TopSection>
                <LogoSectionComponent />
                <MenuSection>
                    <MenuList>
                        {menu.map((menu) => {
                            return (
                                <li key={menu.name}>
                                    <MenuItem to={menu.path}>
                                        {menu.iconComponent && <IconWrap>{menu.iconComponent}</IconWrap>}
                                        {isSidebarOpen === 'opened' && <span>{menu.name}</span>}
                                    </MenuItem>
                                </li>
                            );
                        })}
                    </MenuList>
                </MenuSection>
            </TopSection>
            <BottomSection>
                <ThemeChanger />
            </BottomSection>
        </SidebarContainer>
    );
};
