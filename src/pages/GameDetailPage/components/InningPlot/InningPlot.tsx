import StrikeZone from '@components/StrikeZone/StrikeZone';

import { StrikeZoneList } from '@pages/GameDetailPage/GameDetailPage.styles';
import { SectionTitle } from '@pages/GameDetailPage/components/StrikeZoneSection/StrikeZoneSection.styles';

import { AtBat } from '@typings/atbat';

interface InningPlotProps {
    atbats: AtBat[];
    inning: number;
}

const InningPlot = ({ atbats, inning }: InningPlotProps) => {
    return (
        <>
            <SectionTitle>이닝: {inning}</SectionTitle>
            <StrikeZoneList>
                <StrikeZone
                    atbats={atbats}
                    outcomeType={'All'}
                    sideType={'Home'}
                    plotType={'zone'}
                    inningType={inning}
                    zoneLabel={'홈팀 투구 - 전체'}
                    radius={24}
                />
                <StrikeZone
                    atbats={atbats}
                    outcomeType={'All'}
                    sideType={'Away'}
                    plotType={'zone'}
                    inningType={inning}
                    zoneLabel={'원정팀 투구 - 전체'}
                    radius={24}
                />
                <StrikeZone
                    atbats={atbats}
                    outcomeType={'InPlay'}
                    sideType={'Home'}
                    plotType={'zone'}
                    inningType={inning}
                    zoneLabel={'홈팀 투구 - 인플레이'}
                    radius={24}
                />
                <StrikeZone
                    atbats={atbats}
                    outcomeType={'InPlay'}
                    sideType={'Away'}
                    plotType={'zone'}
                    inningType={inning}
                    zoneLabel={'원정팀 투구 - 인플레이'}
                    radius={24}
                />
            </StrikeZoneList>
            <StrikeZoneList>
                <StrikeZone
                    atbats={atbats}
                    outcomeType={'CalledStrike'}
                    sideType={'Home'}
                    plotType={'zone'}
                    inningType={inning}
                    zoneLabel={'홈팀 투구 - 스트라이크'}
                    radius={24}
                />
                <StrikeZone
                    atbats={atbats}
                    outcomeType={'CalledStrike'}
                    sideType={'Away'}
                    plotType={'zone'}
                    inningType={inning}
                    zoneLabel={'원정팀 투구 - 스트라이크'}
                    radius={24}
                />
                <StrikeZone
                    atbats={atbats}
                    outcomeType={'Ball'}
                    sideType={'Home'}
                    plotType={'zone'}
                    inningType={inning}
                    zoneLabel={'홈팀 투구 - 볼'}
                    radius={24}
                />
                <StrikeZone
                    atbats={atbats}
                    outcomeType={'Ball'}
                    sideType={'Away'}
                    plotType={'zone'}
                    inningType={inning}
                    zoneLabel={'원정팀 투구 - 볼'}
                    radius={24}
                />
            </StrikeZoneList>
        </>
    );
};

export default InningPlot;
