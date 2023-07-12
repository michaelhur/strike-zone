import { sidebarMenu } from '@constants/menu';

import { IconWrap } from '@components/@shared/Icon/Icon.styles';
import { MenuItem, MobileMenuContainer, MobileMenuList } from '@components/MobileMenu/MobileMenu.styles';

export const MobileMenu = () => {
    return (
        <MobileMenuContainer>
            <MobileMenuList>
                {sidebarMenu.map((menu) => {
                    return (
                        <li key={menu.name}>
                            <MenuItem to={menu.path}>
                                {menu.iconComponent && <IconWrap>{menu.iconComponent}</IconWrap>}
                                <span>{menu.name}</span>
                            </MenuItem>
                        </li>
                    );
                })}
            </MobileMenuList>
        </MobileMenuContainer>
    );
};
