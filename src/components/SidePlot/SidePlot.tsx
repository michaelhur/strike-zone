import { SidePlotValues } from '@constants/pitch';

import { SectionTitle } from '@components/Layout/Layout';
import { SidePlotContainer } from '@components/SidePlot/SidePlot.styles';
import StrikeZone from '@components/StrikeZone/StrikeZone';
import { StrikeZoneList, StrikeZoneRow } from '@components/StrikeZone/StrikeZone.styles';

import { AtBat, OutcomeType } from '@typings/atbat';

interface SidePlotProps {
    atbats: AtBat[];
    outcomeType: OutcomeType;
    hasTitle: boolean;
}

const SidePlot = ({ atbats, outcomeType, hasTitle = true }: SidePlotProps) => {
    const sectionTitle = outcomeType === 'All' ? '전체' : outcomeType == 'CalledStrike' ? '스트라이크' : '볼';

    return (
        <SidePlotContainer>
            {hasTitle && <SectionTitle>{sectionTitle}</SectionTitle>}
            <StrikeZoneRow>
                <StrikeZoneList>
                    {SidePlotValues.slice(0, 2).map((props, index) => {
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
                <StrikeZoneList>
                    {SidePlotValues.slice(2).map((props, index) => {
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
            </StrikeZoneRow>
        </SidePlotContainer>
    );
};

export default SidePlot;
