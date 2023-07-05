import { useEffect, useState } from 'react';

import { OutcomeType } from '@typings/atbat';

export const useOutcomeType = (outcomeCode: string) => {
    const [outcomeType, setOutcomeType] = useState<OutcomeType>('InPlay');

    useEffect(() => {
        switch (outcomeCode) {
            case 'C':
                setOutcomeType('CalledStrike');
                break;
            case 'S':
                setOutcomeType('SwingingStrike');
                break;
            case 'B':
                setOutcomeType('Ball');
                break;
            case '*B':
                setOutcomeType('Ball');
                break;
            case 'F':
                setOutcomeType('Foul');
                break;
            default:
                setOutcomeType('InPlay');
        }
    }, [outcomeCode]);

    return outcomeType;
};
