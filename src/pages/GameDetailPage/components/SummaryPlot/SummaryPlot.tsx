import StrikeZone from '@components/StrikeZone/StrikeZone';

import { StrikeZoneList } from '@pages/GameDetailPage/GameDetailPage.styles';
import { SectionTitle } from '@pages/GameDetailPage/components/StrikeZoneSection/StrikeZoneSection.styles';
import { SummaryPlotContainer } from '@pages/GameDetailPage/components/SummaryPlot/SummaryPlot.styles';

import { AtBat, SideType } from '@typings/atbat';

interface SummaryPlotProps {
    atbats: AtBat[];
    sideType: SideType;
}

const SummaryPlot = ({ atbats, sideType }: SummaryPlotProps) => {
    const sectionTitle = sideType === 'All' ? '전체' : sideType === 'Home' ? '홈팀 투구' : '원정팀 투구';

    return (
        <SummaryPlotContainer>
            <SectionTitle>{sectionTitle}</SectionTitle>
            <StrikeZoneList>
                <StrikeZone
                    atbats={atbats}
                    outcomeType={'All'}
                    sideType={sideType}
                    plotType={'zone'}
                    zoneLabel={'전체'}
                    radius={24}
                />
                <StrikeZone
                    atbats={atbats}
                    outcomeType={'BallsAndStrikes'}
                    sideType={sideType}
                    plotType={'zone'}
                    zoneLabel={'스트라이크 + 볼'}
                    radius={24}
                />
                <StrikeZone
                    atbats={atbats}
                    outcomeType={'CalledStrike'}
                    sideType={sideType}
                    plotType={'zone'}
                    zoneLabel={'스트라이크'}
                    radius={24}
                />
                <StrikeZone
                    atbats={atbats}
                    outcomeType={'Ball'}
                    sideType={sideType}
                    plotType={'zone'}
                    zoneLabel={'볼'}
                    radius={24}
                />
            </StrikeZoneList>
        </SummaryPlotContainer>
    );
};

export default SummaryPlot;
