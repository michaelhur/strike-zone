import { LogoIcon } from '@components/@shared/Icon';

import { Play } from '@typings/atbat';

interface PitchProps {
    play: Play;
    radius: number;
}

export const Pitch = ({ play, radius }: PitchProps) => {
    const { isStrike, isBall, velocity, pitchType, coordinates } = play;
    const OutcomeType = isStrike ? 'Strike' : isBall ? 'Ball' : 'InPlay';
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
    Strike: {
        color: 'var(--primary500)',
    },
    Ball: {
        color: 'var(--red)',
    },
    InPlay: {
        color: 'var(--orange)',
    },
};
