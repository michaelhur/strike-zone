import styled from '@emotion/styled';

import { FlexRowContainer } from '@components/Layout/Layout';
import { Loading } from '@components/Loading/Loading';
import StrikeZone from '@components/StrikeZone/StrikeZone';

import { useGetAtbat } from '@hooks/@query/atbat/useGetAtbat';

import { StrikeZoneSectionContainer } from '@pages/GameDetailPage/components/StrikeZoneSection/StrikeZoneSection.styles';

interface StrikeZoneSectionProps {
    slug: string;
}

export const StrikeZoneSection = ({ slug }: StrikeZoneSectionProps) => {
    const { isLoading, data } = useGetAtbat(slug!);
    if (isLoading) return <Loading size={60} />;
    return (
        <StrikeZoneSectionContainer>
            <h2>전체</h2>
            <PlotContainer>
                <StrikeZone
                    atbats={data!}
                    outcomeType={'All'}
                    sideType={'Home'}
                    plotType={'zone'}
                    radius={24}
                    zoneLabel={'스트라이크 + 볼'}
                />
                <StrikeZone
                    atbats={data!}
                    outcomeType={'Ball'}
                    sideType={'Home'}
                    plotType={'zone'}
                    radius={24}
                    zoneLabel={'볼'}
                />
                <StrikeZone
                    atbats={data!}
                    outcomeType={'Strike'}
                    sideType={'Home'}
                    plotType={'zone'}
                    radius={24}
                    zoneLabel={'스트라이크'}
                />
                <StrikeZone
                    atbats={data!}
                    outcomeType={'Strike'}
                    sideType={'Home'}
                    plotType={'heatmap'}
                    radius={24}
                    zoneLabel={'스트라이크 존'}
                />
            </PlotContainer>
        </StrikeZoneSectionContainer>
    );
};

export const PlotContainer = styled(FlexRowContainer)({
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '2rem',
});
