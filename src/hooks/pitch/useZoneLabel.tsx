import { useEffect, useState } from 'react';

import { OutcomeType } from '@typings/atbat';

export const useZoneLabel = (outcomeType: OutcomeType): string => {
    const [zoneLabel, setZoneLabel] = useState<string>('');

    useEffect(() => {
        switch (outcomeType) {
            case 'All':
                setZoneLabel('스트라이크+볼');
                break;
            case 'CalledStrike':
                setZoneLabel('스트라이크');
                break;
            case 'SwingingStrike':
                setZoneLabel('헛스윙');
                break;
            case 'Foul':
                setZoneLabel('파울');
                break;
            case 'InPlay':
                setZoneLabel('타격');
                break;
            default:
                setZoneLabel('볼');
        }
    }, [outcomeType]);

    return zoneLabel;
};
