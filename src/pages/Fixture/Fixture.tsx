import { useState } from 'react';

import { Calendar } from '@components/@shared/Calendar/Calendar';

import { FixturePageContainer } from '@pages/Fixture/Fixture.styles';

const Fixture = () => {
    const [selected, onSelect] = useState<Date>();

    console.log('selected:', selected);
    return (
        <FixturePageContainer>
            <Calendar mode={'single'} selected={selected} onSelect={onSelect} />
        </FixturePageContainer>
    );
};

export default Fixture;
