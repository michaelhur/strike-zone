import { useNavigate } from 'react-router-dom';

import { DYNAMIC_PATH } from '@constants/routes';
import { css } from '@emotion/react';
import { playerList } from '@mocks/data/player';

import { PlayerListContainer } from '@pages/PlayerList/PlayerList.styles';
import { PlayerListItem } from '@pages/PlayerList/components/PlayerListItem/PlayerListItem';

const players = playerList.slice(0, 10);

const PlayerList = () => {
    const navigate = useNavigate();
    const onClickPlayerItem = (id: number) => {
        navigate(`${DYNAMIC_PATH.PLAYER_DETAIL(id)}`);
    };

    return (
        <PlayerListContainer>
            <table css={css({ width: '100%' })}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Batting Side</th>
                        <th>Pitching Hand</th>
                        <th>Position</th>
                        <th>Height</th>
                        <th>Weight</th>
                    </tr>
                </thead>
                <tbody css={css({ width: '100%' })}>
                    {players.map((player) => (
                        <PlayerListItem key={player.id} player={player} onClickPlayerItem={onClickPlayerItem} />
                    ))}
                </tbody>
            </table>
        </PlayerListContainer>
    );
};

export default PlayerList;
