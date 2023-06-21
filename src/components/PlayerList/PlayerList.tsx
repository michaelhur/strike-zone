import { css } from '@emotion/react';

import {
    PlayerListBody,
    PlayerListHeader,
    PlayerListTable,
    StyledHeaderCell,
    StyledNameHeaderCell,
} from '@components/PlayerList/PlayerList.styles';
import { PlayerListItem } from '@components/PlayerListItem/PlayerListItem';

import { Player } from '@typings/player';

interface PlayerListProps {
    players: Player[];
    onClickItem: (id: number) => void;
}

export const PlayerList = ({ players, onClickItem }: PlayerListProps) => {
    return (
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
            <PlayerListBody>
                {players &&
                    players.map((player) => (
                        <PlayerListItem key={player.id} player={player} onClickPlayerItem={onClickItem} />
                    ))}
            </PlayerListBody>
        </PlayerListTable>
    );
};
