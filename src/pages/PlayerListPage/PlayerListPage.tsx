import { Suspense, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { positionTypeTabOptions } from '@constants/players';
import { DYNAMIC_PATH } from '@constants/routes';

import { CategoryMenu } from '@components/CategoryMenu/CategoryMenu';
import { Pagination } from '@components/Pagination/Pagination';
import { PlayerList } from '@components/PlayerList/PlayerList';

import { useGetPlayerList } from '@hooks/@query/player/useGetPlayerList';

import { PlayerListContainer } from '@pages/PlayerListPage/PlayerListPage.styles';

import { PositionType } from '@typings/player';

import { Loading } from '@src/components/Loading/Loading';

const PlayerListPage = () => {
    const navigate = useNavigate();
    const [positionTypeFilter, setPositionTypeFilter] = useState<PositionType>('ALL');
    const [page, setPage] = useState<number>(1);
    const [searchParams, setSearchParams] = useState<string>('');

    const onClickPlayerItem = (slug: string) => navigate(`${DYNAMIC_PATH.PLAYER_DETAIL(slug)}`);

    const onClickPositionTab = (position: PositionType) => {
        setPositionTypeFilter(position);
        setPage(1);
    };

    const { isLoading, data } = useGetPlayerList(page, searchParams);

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
                <Pagination currentPage={page} totalPage={Math.ceil(data.count / 10)} onClickPage={setPage} />
            )}
        </PlayerListContainer>
    );
};

export default PlayerListPage;
