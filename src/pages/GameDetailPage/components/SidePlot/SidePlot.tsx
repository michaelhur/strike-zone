import StrikeZone from '@components/StrikeZone/StrikeZone';

import { StrikeZoneList } from '@pages/GameDetailPage/GameDetailPage.styles';
import { SidePlotContainer } from '@pages/GameDetailPage/components/SidePlot/SidePlot.styles';
import { SectionTitle } from '@pages/GameDetailPage/components/StrikeZoneSection/StrikeZoneSection.styles';

import { AtBat, OutcomeType } from '@typings/atbat';

interface SidePlotProps {
    atbats: AtBat[];
    outcomeType: OutcomeType;
}

const SidePlot = ({ atbats, outcomeType }: SidePlotProps) => {
    const sectionTitle = outcomeType === 'All' ? '전체' : outcomeType == 'CalledStrike' ? '스트라이크' : '볼';
    return (
        <SidePlotContainer>
            <SectionTitle>{sectionTitle}</SectionTitle>
            <StrikeZoneList>
                <StrikeZone
                    atbats={atbats}
                    outcomeType={outcomeType}
                    pitchHand={'L'}
                    batSide={'L'}
                    plotType={'zone'}
                    zoneLabel={'LHP vs LHB'}
                    radius={24}
                />
                <StrikeZone
                    atbats={atbats}
                    outcomeType={outcomeType}
                    pitchHand={'L'}
                    batSide={'R'}
                    plotType={'zone'}
                    zoneLabel={'LHP vs RHB'}
                    radius={24}
                />
                <StrikeZone
                    atbats={atbats}
                    outcomeType={outcomeType}
                    pitchHand={'R'}
                    batSide={'L'}
                    plotType={'zone'}
                    zoneLabel={'RHP vs LHB'}
                    radius={24}
                />
                <StrikeZone
                    atbats={atbats}
                    outcomeType={outcomeType}
                    pitchHand={'R'}
                    batSide={'R'}
                    plotType={'zone'}
                    zoneLabel={'RHP vs RHB'}
                    radius={24}
                />
            </StrikeZoneList>
        </SidePlotContainer>
    );
};

export default SidePlot;
