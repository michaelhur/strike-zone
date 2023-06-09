import { rest } from 'msw';

import { Player } from '../../src/typings/player';
import { playerList } from '../data/player';

export const playerHandler = [
    rest.get<Player[]>('/api/players', async (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(playerList));
    }),

    rest.get<Player>(`/api/players/:playerId`, async (req, res, ctx) => {
        const { playerId } = req.params;
        const targetPlayer = playerList.find((player) => player.id === Number(playerId));

        if (!targetPlayer) return res(ctx.status(400), ctx.json({ message: '해당 선수는 존재하지 않습니다' }));

        return res(ctx.status(200), ctx.json(targetPlayer));
    }),
];
