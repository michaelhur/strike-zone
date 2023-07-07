import { SectionTitle } from '@components/Layout/Layout';
import StrikeZone from '@components/StrikeZone/StrikeZone';
import { StrikeZoneList } from '@components/StrikeZone/StrikeZone.styles';
import { SummaryPlotContainer } from '@components/SummaryPlot/SummaryPlot.styles';

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
                    plotType={'zone'}
                    zoneLabel={'전체'}
                    radius={24}
                    outcomeType={'All'}
                    sideType={sideType}
                />
                <StrikeZone
                    atbats={atbats}
                    plotType={'zone'}
                    zoneLabel={'스트라이크 + 볼'}
                    radius={24}
                    outcomeType={'BallsAndStrikes'}
                    sideType={sideType}
                />
                <StrikeZone
                    atbats={atbats}
                    plotType={'zone'}
                    zoneLabel={'스트라이크'}
                    radius={24}
                    outcomeType={'CalledStrike'}
                    sideType={sideType}
                />
                <StrikeZone
                    atbats={atbats}
                    plotType={'zone'}
                    zoneLabel={'볼'}
                    radius={24}
                    outcomeType={'Ball'}
                    sideType={sideType}
                />
            </StrikeZoneList>
        </SummaryPlotContainer>
    );
};

export default SummaryPlot;
