import { useRecoilState } from 'recoil';

import { CalendarIcon } from '@components/@shared/Icon/CalendarIcon';
import { IconWrap } from '@components/@shared/Icon/Icon.styles';
import { PersonIcon } from '@components/@shared/Icon/PersonIcon';
import { TeamIcon } from '@components/@shared/Icon/TeamIcon';
import { UmpireIcon } from '@components/@shared/Icon/UmpireIcon';
import { LogoSection, MenuItem, MenuList, MenuSection, SidebarContainer } from '@components/Sidebar/Sidebar.styles';

import { sidebarCollapseState } from '@recoils/sidebar/atom';

import { Menu } from '@typings/menu';

const sampleMenu: Menu[] = [
    {
        name: 'Schedule',
        path: '/',
        iconComponent: <CalendarIcon />,
    },
    {
        name: 'Player',
        path: '/',
        iconComponent: <PersonIcon />,
    },
    {
        name: 'Team',
        path: '/',
        iconComponent: <TeamIcon />,
    },
    {
        name: 'Umpire',
        path: '/',
        iconComponent: <UmpireIcon />,
    },
];

export const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useRecoilState(sidebarCollapseState);

    return (
        <SidebarContainer>
            <LogoSection>
                <img src="/sz_logo_full.svg" alt="Logo" width={208} />
            </LogoSection>
            <MenuSection>
                <MenuList>
                    {sampleMenu.map((menu) => {
                        return (
                            <li key={menu.name}>
                                <MenuItem to={menu.path}>
                                    {menu.iconComponent && <IconWrap>{menu.iconComponent}</IconWrap>}
                                    <span>{menu.name}</span>
                                </MenuItem>
                            </li>
                        );
                    })}
                </MenuList>
            </MenuSection>
        </SidebarContainer>
    );
};
