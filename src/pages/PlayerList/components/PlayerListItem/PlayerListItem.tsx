import { playerList } from '@mocks/data/player';

import { Player } from '@typings/player';

interface PlayerListItemProps {
    player: Player;
}

const player = playerList[0];

export const PlayerListItem = () => {
    const { id, name, batSide, pitchHand } = player;

    return (
        <div>
            {id}
            {name}
            {batSide}
            {pitchHand}
        </div>
    );
};
