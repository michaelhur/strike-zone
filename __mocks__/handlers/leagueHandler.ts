import { rest } from 'msw';

import { League } from '../../src/typings/league';
import { leagueList } from '../data/league';

export const leagueHandler = [
    rest.get<League[]>('/api/leagues', async (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(leagueList));
    }),

    rest.get<League>('/api/leagues/:leagueId', async (req, res, ctx) => {
        const { leagueId } = req.params;
        const targetLeague = leagueList.find((league) => league.id === Number(leagueId));

        if (!targetLeague) return res(ctx.status(400), ctx.json({ message: '해당 리그는 존재하지 않습니다.' }));

        return res(ctx.status(200), ctx.json(targetLeague));
    }),
];
