import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PATH } from '@constants/routes';

import { Loading } from '@components/Loading/Loading';

const HomePage = lazy(() => import('@pages/HomePage/HomePage'));
const FixturePage = lazy(() => import('@pages/FixturePage/FixturePage'));
const FixtureByDatePage = lazy(() => import('@pages/FixtureByDatePage/FixtureByDatePage'));
const PlayerListPage = lazy(() => import('@pages/PlayerListPage/PlayerListPage'));

const Router = () => {
    return (
        <Suspense fallback={<Loading size={40} />}>
            <Routes>
                <Route path={`${PATH.HOME}`} element={<HomePage />} />
                <Route path={`${PATH.FIXTURE}`} element={<FixturePage />} />
                <Route path={`${PATH.FIXTURE_BY_DATE}`} element={<FixtureByDatePage />} />
                <Route path={`${PATH.PLAYER_LIST}`} element={<PlayerListPage />} />
            </Routes>
        </Suspense>
    );
};

export default Router;
