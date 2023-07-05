import { useState } from 'react';

import { PitchPlay } from '@typings/atbat';

export const usePitchHover = (initialState: PitchPlay | null) => {
    const [hoverData, setHoverData] = useState<PitchPlay | null>(initialState);

    const onClickPitch = (e: React.MouseEvent, pitchPlay: PitchPlay) => {
        e.preventDefault();
        setHoverData({ ...pitchPlay, coordinates: { x: e.pageX, y: e.pageY } });
    };
    const onUnclickPitch = () => setHoverData(null);

    return { hoverData, onClickPitch, onUnclickPitch };
};
