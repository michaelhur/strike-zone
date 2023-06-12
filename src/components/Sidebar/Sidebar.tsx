import { useRecoilValue } from 'recoil';

import { CalendarIcon, PersonIcon, TeamIcon, UmpireIcon } from '@components/@shared/Icon';
import { IconWrap } from '@components/@shared/Icon/Icon.styles';
import {
    Logo,
    LogoSection,
    MenuItem,
    MenuList,
    MenuSection,
    SidebarContainer,
    StyledTitle,
} from '@components/Sidebar/Sidebar.styles';

import { sidebarCollapseState } from '@recoils/sidebar/atom';

import { Menu } from '@typings/menu';

const sampleMenu: Menu[] = [
    {
        name: 'Schedule',
        path: '/games',
        iconComponent: <CalendarIcon />,
    },
    {
        name: 'Player',
        path: '/players',
        iconComponent: <PersonIcon />,
    },
    {
        name: 'Team',
        path: '/teams',
        iconComponent: <TeamIcon />,
    },
    {
        name: 'Umpire',
        path: '/umpires',
        iconComponent: <UmpireIcon />,
    },
];

export const Sidebar = () => {
    const isSidebarOpen = useRecoilValue(sidebarCollapseState);

    return (
        <SidebarContainer isSidebarOpen={isSidebarOpen}>
            <LogoSection>
                <Logo to={'/'}>
                    <img src="/sz_logo.svg" alt="Logo" height={32} width={32} />
                    {isSidebarOpen && <StyledTitle>스트라이크 존</StyledTitle>}
                </Logo>
            </LogoSection>
            <MenuSection>
                <MenuList>
                    {sampleMenu.map((menu) => {
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
        </SidebarContainer>
    );
};
