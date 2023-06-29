import { LogoIcon } from '@components/@shared/Icon';

import { Play } from '@typings/atbat';

interface PitchProps {
    play: Play;
    radius: number;
}

export const Pitch = ({ play, radius }: PitchProps) => {
    const { outcomeCode, velocity, pitchType, coordinates } = play;
    const OutcomeType =
        outcomeCode === 'C'
            ? 'CalledStrike'
            : outcomeCode === 'B' || outcomeCode === '*B'
            ? 'Ball'
            : outcomeCode === 'S'
            ? 'SwingingStrike'
            : 'InPlay';
    return (
        <g transform={`translate(${coordinates.x - radius / 2}, ${coordinates.y - radius / 2})`}>
            <LogoIcon
                color={PitchOutcomeColorVariant[OutcomeType].color}
                size={radius}
                opacity={0.7}
                hoverable={true}
            />
        </g>
    );
};

export const PitchOutcomeColorVariant = {
    CalledStrike: {
        color: 'var(--primary500)',
    },
    SwingingStrike: {
        color: 'var(--red)',
    },
    Ball: {
        color: 'var(--green)',
    },
    InPlay: {
        color: 'var(--orange)',
    },
};
