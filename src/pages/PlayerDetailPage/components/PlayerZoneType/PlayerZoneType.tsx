import { BatterPlotValues, PitcherPlotValues } from '@constants/pitch';

import StrikeZone from '@components/StrikeZone/StrikeZone';
import { StrikeZoneList } from '@components/StrikeZone/StrikeZone.styles';

import { AtBat } from '@typings/atbat';
import { PositionType } from '@typings/player';

interface PlayerZoneTypeProps {
    atbats: AtBat[];
    positionType: PositionType;
}

export const PlayerZoneType = ({ atbats, positionType }: PlayerZoneTypeProps) => {
    switch (positionType) {
        case 'Pitcher':
            return (
                <StrikeZoneList>
                    {PitcherPlotValues.map((props, index) => {
                        return (
                            <StrikeZone
                                key={index}
                                atbats={atbats}
                                outcomeType={'BallsAndStrikes'}
                                plotType={'zone'}
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
                                outcomeType={'BallsAndStrikes'}
                                plotType={'zone'}
                                radius={24}
                                {...props}
                            />
                        );
                    })}
                </StrikeZoneList>
            );
    }
};
