import { Logo, MobileHeaderContainer } from '@components/MobileHeader/MobileHeader.styles';

export const MobileHeader = () => {
    return (
        <MobileHeaderContainer>
            <Logo to={'/'}>
                <img src={'/sz_logo_full.svg'} alt="Logo" height={32} />
            </Logo>
        </MobileHeaderContainer>
    );
};
