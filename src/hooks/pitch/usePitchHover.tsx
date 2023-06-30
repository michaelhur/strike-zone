import { useState } from 'react';

import { PitchPlay } from '@typings/atbat';

export const usePitchHover = (initialState: PitchPlay | null) => {
    const [hoverData, setHoverData] = useState<PitchPlay | null>(initialState);

    const onClickPitch = (pitchPlay: PitchPlay) => setHoverData(pitchPlay);
    const onUnclickPitch = () => setHoverData(null);

    return { hoverData, onClickPitch, onUnclickPitch };
};
