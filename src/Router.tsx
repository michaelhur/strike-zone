import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Loading from '@components/Loading/Loading';

const Router = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                {/*  여기에 <Route /> 추가  */}
                <Route path="/" />
            </Routes>
        </Suspense>
    );
};

export default Router;
