import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PATH } from '@constants/routes';

import Loading from '@components/Loading/Loading';

const HomePage = lazy(() => import('@pages/Home/Home'));
const FixturePage = lazy(() => import('@pages/Fixture/Fixture'));

const Router = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route path={`${PATH.HOME}`} element={<HomePage />} />
                <Route path={`${PATH.FIXTURE}`} element={<FixturePage />} />
            </Routes>
        </Suspense>
    );
};

export default Router;
