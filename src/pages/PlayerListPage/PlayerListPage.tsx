import { Suspense, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { positionTypeTabOptions } from '@constants/players';
import { DYNAMIC_PATH } from '@constants/routes';

import { CategoryMenu } from '@components/CategoryMenu/CategoryMenu';
import { Pagination } from '@components/Pagination/Pagination';
import { PlayerList } from '@components/PlayerList/PlayerList';

import { useGetPlayerList } from '@hooks/@query/player/useGetPlayerList';
import useBackState from '@hooks/useBackState';

import { PlayerListContainer } from '@pages/PlayerListPage/PlayerListPage.styles';

import { PositionType } from '@typings/player';

import { Loading } from '@src/components/Loading/Loading';

const PlayerListPage = () => {
    const navigate = useNavigate();
    const [positionTypeFilter, setPositionTypeFilter] = useState<PositionType>('ALL');
    const [page, setPage] = useState<number>(1);
    const [searchParams, setSearchParams] = useState<string>('');

    const onClickPlayerItem = (slug: string) => {
        sessionStorage.setItem('playerList_positionType', JSON.stringify(positionTypeFilter));
        sessionStorage.setItem('playerList_page', JSON.stringify(page));
        navigate(`${DYNAMIC_PATH.PLAYER_DETAIL(slug)}`);
    };

    const onClickPositionTab = (position: PositionType) => {
        setPositionTypeFilter(position);
        setPage(1);
    };

    const onClickPage = (page: number) => setPage(page);

    const { isLoading, data } = useGetPlayerList(page, searchParams);

    useEffect(() => {
        const handlePopState = () => {
            console.log('1234');
            const page = sessionStorage.getItem('playerList_page');
            if (page) {
                setPage(JSON.parse(page));
                sessionStorage.removeItem('playerList_page');
            }

            const positionType = sessionStorage.getItem('playerList_positionType');
            if (positionType) {
                setPositionTypeFilter(JSON.parse(positionType));
                sessionStorage.removeItem('playerList_positionType');
            }
        };

        handlePopState();
    }, []);

    useEffect(() => {
        if (!positionTypeFilter || positionTypeFilter === 'ALL') setSearchParams('');
        else setSearchParams(`positionType=${positionTypeFilter}`);
    }, [positionTypeFilter]);

    return (
        <PlayerListContainer>
            <CategoryMenu<PositionType, any>
                selectedCategory={positionTypeFilter}
                setSelectedCategory={onClickPositionTab}
                categoryOptions={positionTypeTabOptions}
            />
            {isLoading ? <Loading size={60} /> : <PlayerList players={data!.players} onClickItem={onClickPlayerItem} />}
            {data && data.count > 10 && (
                <Pagination currentPage={page} totalPage={Math.ceil(data.count / 10)} onClickPage={onClickPage} />
            )}
        </PlayerListContainer>
    );
};

export default PlayerListPage;
