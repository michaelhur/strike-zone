import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { positionTypeTabOptions } from '@constants/players';
import { DYNAMIC_PATH } from '@constants/routes';
import { css } from '@emotion/react';

import { CategoryMenu } from '@components/CategoryMenu/CategoryMenu';
import { Loading } from '@components/Loading/Loading';
import { Pagination } from '@components/Pagination/Pagination';
import { PlayerListItem } from '@components/PlayerListItem/PlayerListItem';

import { useGetPlayerList } from '@hooks/@query/player/useGetPlayerList';

import {
    PlayerListContainer,
    PlayerListHeader,
    PlayerListTable,
    StyledHeaderCell,
    StyledNameHeaderCell,
} from '@pages/PlayerListPage/PlayerListPage.styles';

import { PositionType } from '@typings/player';

const PlayerListPage = () => {
    const navigate = useNavigate();
    const [positionTypeFilter, setPositionTypeFilter] = useState<PositionType>('ALL');
    const [page, setPage] = useState<number>(1);
    const [searchParams, setSearchParams] = useState<string>('');

    const onClickPlayerItem = (id: number) => navigate(`${DYNAMIC_PATH.PLAYER_DETAIL(id)}`);

    const onClickPositionTab = (position: PositionType) => setPositionTypeFilter(position);

    const { isLoading, data: data } = useGetPlayerList(page, searchParams);

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
            <PlayerListTable>
                <PlayerListHeader>
                    <tr>
                        <StyledNameHeaderCell>Name</StyledNameHeaderCell>
                        <StyledHeaderCell>Batting Side</StyledHeaderCell>
                        <StyledHeaderCell>Pitching Hand</StyledHeaderCell>
                        <StyledHeaderCell>Position</StyledHeaderCell>
                        <StyledHeaderCell>Height</StyledHeaderCell>
                        <StyledHeaderCell>Weight</StyledHeaderCell>
                    </tr>
                </PlayerListHeader>
                {isLoading ? (
                    <Loading size={60} />
                ) : (
                    <tbody css={css({ width: '100%' })}>
                        {data?.players &&
                            data.players.map((player) => (
                                <PlayerListItem key={player.id} player={player} onClickPlayerItem={onClickPlayerItem} />
                            ))}
                    </tbody>
                )}
            </PlayerListTable>
            {data && data.count > 10 && (
                <Pagination currentPage={page} totalPage={Math.ceil(data.count / 10)} onClickPage={setPage} />
            )}
        </PlayerListContainer>
    );
};

export default PlayerListPage;
