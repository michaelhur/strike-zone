import StrikeZone from '@components/StrikeZone/StrikeZone';

import { StrikeZoneList } from '@pages/GameDetailPage/GameDetailPage.styles';
import { InningPlotContainer } from '@pages/GameDetailPage/components/InningPlot/InningPlot.styles';
import { SectionTitle } from '@pages/GameDetailPage/components/StrikeZoneSection/StrikeZoneSection.styles';

import { AtBat } from '@typings/atbat';

interface InningPlotProps {
    atbats: AtBat[];
    inning: number;
}

const InningPlot = ({ atbats, inning }: InningPlotProps) => {
    return (
        <InningPlotContainer>
            <SectionTitle>이닝: {inning}</SectionTitle>
            <StrikeZoneList>
                <StrikeZone
                    atbats={atbats}
                    plotType={'zone'}
                    zoneLabel={'홈팀 투구 - 전체'}
                    radius={24}
                    outcomeType={'All'}
                    sideType={'Home'}
                    inningType={inning}
                />
                <StrikeZone
                    atbats={atbats}
                    plotType={'zone'}
                    zoneLabel={'원정팀 투구 - 전체'}
                    radius={24}
                    outcomeType={'All'}
                    sideType={'Away'}
                    inningType={inning}
                />
                <StrikeZone
                    atbats={atbats}
                    plotType={'zone'}
                    zoneLabel={'홈팀 투구 - 인플레이'}
                    radius={24}
                    outcomeType={'InPlay'}
                    sideType={'Home'}
                    inningType={inning}
                />
                <StrikeZone
                    atbats={atbats}
                    plotType={'zone'}
                    zoneLabel={'원정팀 투구 - 인플레이'}
                    radius={24}
                    outcomeType={'InPlay'}
                    sideType={'Away'}
                    inningType={inning}
                />
            </StrikeZoneList>
            <StrikeZoneList>
                <StrikeZone
                    atbats={atbats}
                    plotType={'zone'}
                    zoneLabel={'홈팀 투구 - 스트라이크'}
                    radius={24}
                    outcomeType={'CalledStrike'}
                    sideType={'Home'}
                    inningType={inning}
                />
                <StrikeZone
                    atbats={atbats}
                    plotType={'zone'}
                    zoneLabel={'원정팀 투구 - 스트라이크'}
                    radius={24}
                    outcomeType={'CalledStrike'}
                    sideType={'Away'}
                    inningType={inning}
                />
                <StrikeZone
                    atbats={atbats}
                    plotType={'zone'}
                    zoneLabel={'홈팀 투구 - 볼'}
                    radius={24}
                    outcomeType={'Ball'}
                    sideType={'Home'}
                    inningType={inning}
                />
                <StrikeZone
                    atbats={atbats}
                    plotType={'zone'}
                    zoneLabel={'원정팀 투구 - 볼'}
                    radius={24}
                    outcomeType={'Ball'}
                    sideType={'Away'}
                    inningType={inning}
                />
            </StrikeZoneList>
        </InningPlotContainer>
    );
};

export default InningPlot;
