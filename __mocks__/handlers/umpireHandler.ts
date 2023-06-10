import { rest } from 'msw';

import { Umpire } from '../../src/typings/umpire';
import { umpireList } from '../data/umpire';

export const umpireHandler = [
    rest.get<Umpire[]>('/api/umpires', async (req, res, ctx) => {
        const query = req.url.searchParams.get('q');
        const filteredList = umpireList.filter((umpire) =>
            query ? umpire.name.toLowerCase().indexOf(query) !== -1 : true,
        );

        return res(ctx.status(200), ctx.json(filteredList));
    }),

    rest.get<Umpire>('/api/umpires/:umpireId', async (req, res, ctx) => {
        const { umpireId } = req.params;
        const targetUmpire = umpireList.find((umpire) => umpire.id === Number(umpireId));

        if (!targetUmpire) return res(ctx.status(400), ctx.json({ message: '해당 심판은 존재하지 않습니다.' }));

        return res(ctx.status(200), ctx.json(targetUmpire));
    }),
];
