import styled from '@emotion/styled';

import { FlexRowContainer } from '@components/Layout/Layout';
import { Loading } from '@components/Loading/Loading';
import StrikeZone from '@components/StrikeZone/StrikeZone';

import { useGetAtbat } from '@hooks/@query/atbat/useGetAtbat';

import { PlotContainer } from '@pages/GameDetailPage/GameDetailPage.styles';
import {
    SectionTitle,
    StrikeZoneSectionContainer,
} from '@pages/GameDetailPage/components/StrikeZoneSection/StrikeZoneSection.styles';

import { SideType } from '@typings/atbat';

interface StrikeZoneSectionProps {
    slug: string;
    sideType: SideType;
}

export const StrikeZoneSection = ({ slug, sideType }: StrikeZoneSectionProps) => {
    const { isLoading, data } = useGetAtbat(slug!);
    const sectionTitle = sideType === 'All' ? '전체' : sideType === 'Home' ? '홈팀 투구' : '원정팀 투구';

    return (
        <StrikeZoneSectionContainer>
            <SectionTitle>{sectionTitle}</SectionTitle>
            <PlotContainer>
                {isLoading ? (
                    <Loading size={60} />
                ) : (
                    <>
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
                            outcomeType={'BallsAndStrikes'}
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
                    </>
                )}
            </PlotContainer>
        </StrikeZoneSectionContainer>
    );
};
