import { HeatMap } from '@components/StrikeZone/components/HeatMap/HeatMap';
import { Pitch } from '@components/StrikeZone/components/Pitch/Pitch';

import { PitchPlay, PlotTypes } from '@typings/atbat';

interface PlotTypeProps {
    plotType: PlotTypes;
    scaledPitches: PitchPlay[];
    radius: number;
    onClickPitch: (pitchPlay: PitchPlay) => void;
    onUnclickPitch: () => void;
}

export const PlotType = ({ plotType, scaledPitches, radius, onClickPitch, onUnclickPitch }: PlotTypeProps) => {
    return plotType === 'zone' ? (
        <>
            {scaledPitches.map((play) => (
                <Pitch
                    key={play.id}
                    play={play}
                    radius={radius}
                    onClickPitch={onClickPitch}
                    onUnclickPitch={onUnclickPitch}
                />
            ))}
        </>
    ) : (
        <HeatMap pitchList={scaledPitches} />
    );
};
