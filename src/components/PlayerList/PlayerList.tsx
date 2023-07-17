import {
    ListTitle,
    PlayerListBody,
    PlayerListHeader,
    PlayerListTable,
    StyledHeaderCell,
    StyledNameHeaderCell,
} from '@components/PlayerList/PlayerList.styles';
import { PlayerListItem } from '@components/PlayerListItem/PlayerListItem';

import { useResponsive } from '@hooks/common/useResponsive';

import { Player } from '@typings/player';

interface PlayerListProps {
    players: Player[];
    onClickItem: (slug: string) => void;
    listTitle?: string;
}

export const PlayerList = ({ players, onClickItem, listTitle }: PlayerListProps) => {
    const isMobile = !useResponsive(600);

    return (
        <>
            {listTitle && <ListTitle>{listTitle}</ListTitle>}
            <PlayerListTable>
                <PlayerListHeader>
                    <tr>
                        <StyledNameHeaderCell>이름</StyledNameHeaderCell>
                        <StyledHeaderCell>팀</StyledHeaderCell>
                        <StyledHeaderCell>포지션</StyledHeaderCell>
                        {!isMobile && (
                            <>
                                <StyledHeaderCell>타격 방향</StyledHeaderCell>
                                <StyledHeaderCell>투구 방향</StyledHeaderCell>
                            </>
                        )}
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
