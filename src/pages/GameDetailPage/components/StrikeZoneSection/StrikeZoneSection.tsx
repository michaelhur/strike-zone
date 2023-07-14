import { SectionTitle } from '@components/Layout/Layout.styles';

import { StrikeZoneSectionContainer } from '@pages/GameDetailPage/components/StrikeZoneSection/StrikeZoneSection.styles';
import { ZoneType } from '@pages/GameDetailPage/components/ZoneType/ZoneType';

interface StrikeZoneSectionProps {
    slug: string;
    sectionTitle: string;
}

export const StrikeZoneSection = ({ slug, sectionTitle }: StrikeZoneSectionProps) => {
    return (
        <StrikeZoneSectionContainer>
            <SectionTitle>{sectionTitle}</SectionTitle>
            <ZoneType slug={slug} />
        </StrikeZoneSectionContainer>
    );
};
