import {
    ListTitle,
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
    onClickItem: (slug: string) => void;
    listTitle?: string;
}

export const PlayerList = ({ players, onClickItem, listTitle }: PlayerListProps) => {
    return (
        <>
            {listTitle && <ListTitle>{listTitle}</ListTitle>}
            <PlayerListTable>
                <PlayerListHeader>
                    <tr>
                        <StyledNameHeaderCell>Name</StyledNameHeaderCell>
                        <StyledHeaderCell>Team</StyledHeaderCell>
                        <StyledHeaderCell>Position</StyledHeaderCell>
                        <StyledHeaderCell>Batting Side</StyledHeaderCell>
                        <StyledHeaderCell>Pitching Hand</StyledHeaderCell>
                    </tr>
                </PlayerListHeader>
                <PlayerListBody>
                    {players.map((player) => (
                        <PlayerListItem key={player.id} player={player} onClickPlayerItem={onClickItem} />
                    ))}
                </PlayerListBody>
            </PlayerListTable>
        </>
    );
};
