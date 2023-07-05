import { SidePlotValues } from '@constants/pitch';

import { SidePlotContainer } from '@components/SidePlot/SidePlot.styles';
import StrikeZone from '@components/StrikeZone/StrikeZone';
import { StrikeZoneList } from '@components/StrikeZone/StrikeZone.styles';

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
                {SidePlotValues.map((props, index) => {
                    return (
                        <StrikeZone
                            key={index}
                            atbats={atbats}
                            outcomeType={outcomeType}
                            plotType={'zone'}
                            radius={24}
                            {...props}
                        />
                    );
                })}
            </StrikeZoneList>
        </SidePlotContainer>
    );
};

export default SidePlot;
