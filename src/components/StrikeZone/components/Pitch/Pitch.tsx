import { PitchOutcomeColorVariant } from '@constants/pitch';

import { LogoIcon } from '@components/@shared/Icon';

import { PitchPlay } from '@typings/atbat';

interface PitchProps {
    play: PitchPlay;
    radius: number;
    onClickPitch: (play: PitchPlay) => void;
    onUnclickPitch: () => void;
}

export const Pitch = ({ play, radius, onClickPitch, onUnclickPitch }: PitchProps) => {
    const { outcomeCode, coordinates } = play;
    const OutcomeType =
        outcomeCode === 'C'
            ? 'CalledStrike'
            : outcomeCode === 'S'
            ? 'SwingingStrike'
            : outcomeCode === 'B' || outcomeCode === '*B'
            ? 'Ball'
            : outcomeCode === 'F'
            ? 'Foul'
            : 'InPlay';
    return (
        <g
            transform={`translate(${coordinates.x - radius / 2}, ${coordinates.y - radius / 2})`}
            onMouseEnter={() => onClickPitch(play)}
            onMouseLeave={onUnclickPitch}
        >
            <LogoIcon
                color={PitchOutcomeColorVariant[OutcomeType].color}
                size={radius}
                opacity={0.6}
                hoverable={true}
            />
        </g>
    );
};
