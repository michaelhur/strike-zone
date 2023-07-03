import styled from '@emotion/styled';

import { FlexRowContainer } from '@components/Layout/Layout';
import { Loading } from '@components/Loading/Loading';
import StrikeZone from '@components/StrikeZone/StrikeZone';

import { useGetAtbat } from '@hooks/@query/atbat/useGetAtbat';

import { StrikeZoneSectionContainer } from '@pages/GameDetailPage/components/StrikeZoneSection/StrikeZoneSection.styles';

import { SideType } from '@typings/atbat';

interface StrikeZoneSectionProps {
    slug: string;
    sideType: SideType;
}

export const StrikeZoneSection = ({ slug, sideType }: StrikeZoneSectionProps) => {
    const { isLoading, data } = useGetAtbat(slug!);
    if (isLoading) return <Loading size={60} />;
    return (
        <StrikeZoneSectionContainer>
            <h2>{sideType} Pitching</h2>
            <PlotContainer>
                <StrikeZone
                    atbats={data!}
                    outcomeType={'All'}
                    sideType={sideType}
                    plotType={'zone'}
                    radius={24}
                    hasLabel={true}
                />
                <StrikeZone
                    atbats={data!}
                    outcomeType={'Ball'}
                    sideType={sideType}
                    plotType={'zone'}
                    radius={24}
                    hasLabel={true}
                />
                <StrikeZone
                    atbats={data!}
                    outcomeType={'CalledStrike'}
                    sideType={sideType}
                    plotType={'zone'}
                    radius={24}
                    hasLabel={true}
                />
            </PlotContainer>
        </StrikeZoneSectionContainer>
    );
};

export const PlotContainer = styled(FlexRowContainer)({
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '1rem',
});
