import { InningPlotContainer } from '@components/InningPlot/InningPlot.styles';
import { SectionTitle } from '@components/Layout/Layout.styles';
import StrikeZone from '@components/StrikeZone/StrikeZone';
import { StrikeZoneList, StrikeZoneRow } from '@components/StrikeZone/StrikeZone.styles';

import { AtBat } from '@typings/atbat';

interface InningPlotProps {
    atbats: AtBat[];
    inning: number;
}

const InningPlot = ({ atbats, inning }: InningPlotProps) => {
    return (
        <InningPlotContainer>
            <SectionTitle>이닝: {inning}</SectionTitle>
            <StrikeZoneRow>
                <StrikeZoneList>
                    <StrikeZone
                        atbats={atbats}
                        plotType={'zone'}
                        zoneLabel={'홈 투구 - 스트라이크'}
                        radius={24}
                        outcomeType={'CalledStrike'}
                        sideType={'Home'}
                        inningType={inning}
                    />
                    <StrikeZone
                        atbats={atbats}
                        plotType={'zone'}
                        zoneLabel={'원 투구 - 스트라이크'}
                        radius={24}
                        outcomeType={'CalledStrike'}
                        sideType={'Away'}
                        inningType={inning}
                    />
                </StrikeZoneList>
                <StrikeZoneList>
                    <StrikeZone
                        atbats={atbats}
                        plotType={'zone'}
                        zoneLabel={'홈 투구 - 볼'}
                        radius={24}
                        outcomeType={'Ball'}
                        sideType={'Home'}
                        inningType={inning}
                    />
                    <StrikeZone
                        atbats={atbats}
                        plotType={'zone'}
                        zoneLabel={'원 투구 - 볼'}
                        radius={24}
                        outcomeType={'Ball'}
                        sideType={'Away'}
                        inningType={inning}
                    />
                </StrikeZoneList>
            </StrikeZoneRow>
        </InningPlotContainer>
    );
};

export default InningPlot;
