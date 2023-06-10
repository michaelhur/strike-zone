import { rest } from 'msw';

import { Division } from '../../src/typings/division';
import { divisionList } from '../data/division';

export const divisionHandler = [
    rest.get<Division[]>('/api/divisions', async (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(divisionList));
    }),

    rest.get<Division>('/api/divisions/:divisionId', async (req, res, ctx) => {
        const { divisionId } = req.params;
        const targetDivision = divisionList.find((division) => division.id === Number(divisionId));

        if (!targetDivision) return res(ctx.status(400), ctx.json({ message: '해당 디비전은 존재하지 않습니다.' }));

        return res(ctx.status(200), ctx.json(targetDivision));
    }),
];
