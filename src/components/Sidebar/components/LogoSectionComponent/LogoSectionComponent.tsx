import { useCallback } from 'react';

import { useRecoilState } from 'recoil';

import { SidebarCloseIcon, SidebarOpenIcon } from '@components/@shared/Icon';
import { Logo, LogoSection, SidebarButtonWrap } from '@components/Sidebar/Sidebar.styles';

import { useLocalStorage } from '@hooks/common/useLocalStorage';

import { sidebarCollapseState } from '@recoils/sidebar/atom';

export const LogoSectionComponent = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useRecoilState(sidebarCollapseState);
    const [_, setStoredSidebarState] = useLocalStorage('sz-sidebar', 'collapsed');

    const onClickSidebarButton = useCallback(() => {
        const newSidebarState = isSidebarOpen === 'opened' ? 'collapsed' : 'opened';
        setIsSidebarOpen(newSidebarState);
        setStoredSidebarState(newSidebarState);
    }, [isSidebarOpen]);

    switch (isSidebarOpen) {
        case 'opened':
            return (
                <LogoSection>
                    <Logo to={'/'}>
                        <img
                            src={'/sz_logo_full.svg'}
                            alt="Logo"
                            height={24}
                            // width={32}
                        />
                    </Logo>
                    <SidebarCloseIcon size={24} onClickIcon={onClickSidebarButton} />
                </LogoSection>
            );
        case 'collapsed':
            return (
                <SidebarButtonWrap onClick={onClickSidebarButton}>
                    <SidebarOpenIcon size={24} />
                </SidebarButtonWrap>
            );
        default:
            return (
                <SidebarButtonWrap onClick={onClickSidebarButton}>
                    <SidebarOpenIcon size={24} />
                </SidebarButtonWrap>
            );
    }
};
