import { BatterPlotValues, PitcherPlotValues } from '@constants/pitch';

import StrikeZone from '@components/StrikeZone/StrikeZone';
import { StrikeZoneList } from '@components/StrikeZone/StrikeZone.styles';

import { AtBat, OutcomeType, PlotTypes } from '@typings/atbat';
import { PositionType } from '@typings/player';

interface PlayerZoneTypeProps {
    atbats: AtBat[];
    positionType: PositionType;
    plotType: PlotTypes;
    outcomeType: OutcomeType;
}

export const PlayerZoneType = ({ atbats, positionType, plotType, outcomeType }: PlayerZoneTypeProps) => {
    switch (positionType) {
        case 'Pitcher':
            return (
                <StrikeZoneList>
                    {PitcherPlotValues.map((props, index) => {
                        return (
                            <StrikeZone
                                key={index}
                                atbats={atbats}
                                outcomeType={outcomeType}
                                plotType={plotType}
                                radius={24}
                                {...props}
                            />
                        );
                    })}
                </StrikeZoneList>
            );
        default:
            return (
                <StrikeZoneList>
                    {BatterPlotValues.map((props, index) => {
                        return (
                            <StrikeZone
                                key={index}
                                atbats={atbats}
                                outcomeType={outcomeType}
                                plotType={plotType}
                                radius={24}
                                {...props}
                            />
                        );
                    })}
                </StrikeZoneList>
            );
    }
};
