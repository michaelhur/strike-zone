import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PATH } from '@constants/routes';

import { Loading } from '@components/Loading/Loading';

const HomePage = lazy(() => import('@pages/Home/Home'));
const FixturePage = lazy(() => import('@pages/Fixture/Fixture'));
const FixtureByDatePage = lazy(() => import('@pages/FixtureByDate/FixtureByDate'));
const Router = () => {
    return (
        <Suspense fallback={<Loading size={40} />}>
            <Routes>
                <Route path={`${PATH.HOME}`} element={<HomePage />} />
                <Route path={`${PATH.FIXTURE}`} element={<FixturePage />} />
                <Route path={`${PATH.FIXTURE_BY_DATE}`} element={<FixtureByDatePage />} />
            </Routes>
        </Suspense>
    );
};

export default Router;
