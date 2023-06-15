import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PATH } from '@constants/routes';

import Loading from '@components/Loading/Loading';

const HomePage = lazy(() => import('@pages/Home/HomePage'));

const Router = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route path={`${PATH.HOME}`} element={<HomePage />} />
            </Routes>
        </Suspense>
    );
};

export default Router;
