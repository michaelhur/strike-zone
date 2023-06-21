import { rest } from 'msw';

import { GetPlayerListRequest } from '../../src/apis/player';
import { Player } from '../../src/typings/player';
import { getFetchOffsets } from '../../src/utils/url';
import { playerList } from '../data/player';

export const playerHandler = [
    rest.get<GetPlayerListRequest>('/api/players', async (req, res, ctx) => {
        const query = req.url.searchParams.get('q');
        const page = req.url.searchParams.get('page');
        const positionType = req.url.searchParams.get('positionType');
        const positionCode = req.url.searchParams.get('positionCode');

        const filteredData = playerList.filter((player) => {
            const queryFilter = query ? player.name.toLowerCase().indexOf(query) !== -1 : true;
            const positionTypeFilter = positionType ? player.positionType === positionType : true;
            const positionCodeFilter = positionCode ? player.positionCode === positionCode : true;

            return queryFilter && positionTypeFilter && positionCodeFilter;
        });

        const totalCount = filteredData.length;

        if (page) {
            const [start, end] = getFetchOffsets(1);
            return res(ctx.status(200), ctx.json({ players: filteredData.slice(start, end), count: totalCount }));
        }

        return res(ctx.status(200), ctx.json({ players: filteredData, count: totalCount }));
    }),

    rest.get<Player>(`/api/players/:playerId`, async (req, res, ctx) => {
        const { playerId } = req.params;
        const targetPlayer = playerList.find((player) => player.id === Number(playerId));

        if (!targetPlayer) return res(ctx.status(400), ctx.json({ message: '해당 선수는 존재하지 않습니다' }));

        return res(ctx.status(200), ctx.json(targetPlayer));
    }),
];
