import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { positionTypeTabOptions } from '@constants/players';
import { DYNAMIC_PATH } from '@constants/routes';
import { useRecoilValue } from 'recoil';

import { CategoryMenu } from '@components/CategoryMenu/CategoryMenu';
import { Pagination } from '@components/Pagination/Pagination';
import { PlayerList } from '@components/PlayerList/PlayerList';

import { useGetPlayerList } from '@hooks/@query/player/useGetPlayerList';
import { useResponsive } from '@hooks/common/useResponsive';

import { PlayerListContainer } from '@pages/PlayerListPage/PlayerListPage.styles';
import { PlayerListMeta } from '@pages/PlayerListPage/components/PlayerListMeta/PlayerListMeta';

import { sidebarCollapseState } from '@recoils/sidebar/atom';

import { PositionType } from '@typings/player';

import { Loading } from '@src/components/Loading/Loading';
import { NameFilter } from '@src/components/NameFilter/NameFilter';

const PlayerListPage = () => {
    const navigate = useNavigate();
    const [positionTypeFilter, setPositionTypeFilter] = useState<PositionType>('ALL');
    const [page, setPage] = useState<number>(1);
    const [name, setName] = useState<string>('A');
    const isSidebarOpen = useRecoilValue(sidebarCollapseState);
    const isMobile = !useResponsive(600);
    const tabSize = isMobile ? 'small' : 'large';

    const { isLoading, data } = useGetPlayerList(page, name, positionTypeFilter);

    const onClickPlayerItem = (slug: string) => {
        sessionStorage.setItem('playerList_positionType', JSON.stringify(positionTypeFilter));
        sessionStorage.setItem('playerList_page', JSON.stringify(page));
        sessionStorage.setItem('playerList_alphabet', JSON.stringify(name));

        navigate(`${DYNAMIC_PATH.PLAYER_DETAIL(slug)}`);
    };

    const onClickPositionTab = (position: PositionType) => {
        setPositionTypeFilter(position);
        setName('A');
        setPage(1);
    };

    const onClickName = (name: string) => {
        setName(name);
        setPage(1);
    };

    const onClickPage = (page: number) => setPage(page);

    useEffect(() => {
        const handlePopState = () => {
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

            const alphabet = sessionStorage.getItem('playerList_alphabet');
            if (alphabet) {
                setName(JSON.parse(alphabet));
                sessionStorage.removeItem('playerList_alphabet');
            }
        };

        handlePopState();
    }, []);

    return (
        <PlayerListContainer isSidebarOpen={isSidebarOpen}>
            <PlayerListMeta positionType={positionTypeFilter} />
            <CategoryMenu<PositionType, any>
                selectedCategory={positionTypeFilter}
                setSelectedCategory={onClickPositionTab}
                categoryOptions={positionTypeTabOptions}
                size={tabSize}
            />
            <NameFilter selected={name} onSelectName={onClickName} />
            {isLoading || !data ? (
                <Loading size={60} />
            ) : (
                <PlayerList players={data.players} onClickItem={onClickPlayerItem} />
            )}
            {data && data.count > 10 && (
                <Pagination currentPage={page} totalPage={Math.ceil(data.count / 10)} onClickPage={onClickPage} />
            )}
        </PlayerListContainer>
    );
};

export default PlayerListPage;
