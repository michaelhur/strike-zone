import { useEffect, useState } from 'react';

import { OutcomeType } from '@typings/atbat';

export const useZoneLabel = (outcomeType: OutcomeType): string => {
    const [zoneLabel, setZoneLabel] = useState<string>('');

    useEffect(() => {
        switch (outcomeType) {
            case 'All':
                setZoneLabel('스트라이크 + 볼');
                break;
            case 'Strike':
                setZoneLabel('스트라이크');
                break;
            default:
                setZoneLabel('볼');
        }
    }, [outcomeType]);

    return zoneLabel;
};
