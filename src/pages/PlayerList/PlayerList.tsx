import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { leagueTabOptions } from '@constants/menu';
import { positionTypeTabOptions } from '@constants/players';
import { DYNAMIC_PATH } from '@constants/routes';
import { css } from '@emotion/react';
import { playerList } from '@mocks/data/player';

import { CategoryMenu } from '@components/CategoryMenu/CategoryMenu';

import { PlayerListContainer, PlayerListHeader, PlayerListTable } from '@pages/PlayerList/PlayerList.styles';
import { PlayerListItem } from '@pages/PlayerList/components/PlayerListItem/PlayerListItem';

import { PositionType } from '@typings/player';

const players = playerList.slice(0, 10);

const PlayerList = () => {
    const navigate = useNavigate();
    const [positionTypeFilter, setPositionTypeFilter] = useState<PositionType>('ALL');
    const { isLoading, data: playerList } = useGetPlayerList();

    const onClickPlayerItem = (id: number) => {
        navigate(`${DYNAMIC_PATH.PLAYER_DETAIL(id)}`);
    };

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
                        <th>Name</th>
                        <th>Batting Side</th>
                        <th>Pitching Hand</th>
                        <th>Position</th>
                        <th>Height</th>
                        <th>Weight</th>
                    </tr>
                </PlayerListHeader>
                <tbody css={css({ width: '100%' })}>
                    {players.map((player) => (
                        <PlayerListItem key={player.id} player={player} onClickPlayerItem={onClickPlayerItem} />
                    ))}
                </tbody>
            </PlayerListTable>
        </PlayerListContainer>
    );
};

export default PlayerList;
