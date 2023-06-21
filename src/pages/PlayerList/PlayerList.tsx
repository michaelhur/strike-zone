import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { positionTypeTabOptions } from '@constants/players';
import { DYNAMIC_PATH } from '@constants/routes';
import { css } from '@emotion/react';

import { CategoryMenu } from '@components/CategoryMenu/CategoryMenu';
import { Loading } from '@components/Loading/Loading';

import { useGetPlayerList } from '@hooks/@query/player/useGetPlayerList';

import {
    PlayerListContainer,
    PlayerListHeader,
    PlayerListTable,
    StyledHeaderCell,
    StyledNameHeaderCell,
} from '@pages/PlayerList/PlayerList.styles';
import { PlayerListItem } from '@pages/PlayerList/components/PlayerListItem/PlayerListItem';

import { PositionType } from '@typings/player';

const PlayerList = () => {
    const navigate = useNavigate();
    const [positionTypeFilter, setPositionTypeFilter] = useState<PositionType>('ALL');
    const [searchParams, setSearchParams] = useState<string>('');
    const { isLoading, data: playerList } = useGetPlayerList(1, searchParams);
    const onClickPlayerItem = (id: number) => {
        navigate(`${DYNAMIC_PATH.PLAYER_DETAIL(id)}`);
    };

    useEffect(() => {
        if (!positionTypeFilter || positionTypeFilter === 'ALL') setSearchParams('');
        else setSearchParams(`positionType=${positionTypeFilter}`);
    }, [positionTypeFilter]);

    return (
        <PlayerListContainer>
            <CategoryMenu<PositionType, any>
                selectedCategory={positionTypeFilter}
                setSelectedCategory={setPositionTypeFilter}
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
                <tbody css={css({ width: '100%' })}>
                    {isLoading ? (
                        <Loading size={60} />
                    ) : (
                        playerList &&
                        playerList.map((player) => (
                            <PlayerListItem key={player.id} player={player} onClickPlayerItem={onClickPlayerItem} />
                        ))
                    )}
                </tbody>
            </PlayerListTable>
        </PlayerListContainer>
    );
};

export default PlayerList;
