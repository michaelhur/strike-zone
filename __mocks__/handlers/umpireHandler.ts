import { atBatList } from '@mocks/data/atBat';
import { gameList } from '@mocks/data/game';
import { rest } from 'msw';

import { AtBat } from '@typings/atbat';
import { Game } from '@typings/game';

import { Umpire } from '../../src/typings/umpire';
import { umpireList } from '../data/umpire';

export const umpireHandler = [
    rest.get<Umpire[]>('/api/umpires', async (req, res, ctx) => {
        const query = req.url.searchParams.get('q');
        const name = req.url.searchParams.get('name');

        const filteredList = umpireList.filter((umpire) => {
            const queryFilter = query ? umpire.name.toLowerCase().indexOf(query) !== -1 : true;
            const nameFilter = name ? umpire.lastName.startsWith(name) : true;

            return queryFilter && nameFilter;
        });

        return res(ctx.status(200), ctx.json(filteredList));
    }),

    rest.get<Umpire>('/api/umpires/:umpireId', async (req, res, ctx) => {
        const { umpireId } = req.params;
        const targetUmpire = umpireList.find((umpire) => umpire.id === Number(umpireId));

        if (!targetUmpire) return res(ctx.status(400), ctx.json({ message: '해당 심판은 존재하지 않습니다.' }));

        return res(ctx.status(200), ctx.json(targetUmpire));
    }),

    rest.get<Game[]>('/api/umpires/:umpireId/games', async (req, res, ctx) => {
        const { umpireId } = req.params;
        const targetGameList = gameList
            .filter((game) => game.umpire && game.umpire.id === Number(umpireId))
            .sort((a, b) => b.date.localeCompare(a.date));

        if (!targetGameList)
            return res(ctx.status(400), ctx.json({ message: '해당 심판의 경기 정보가 존재하지 않습니다.' }));

        return res(ctx.status(200), ctx.json(targetGameList));
    }),

    rest.get<Game[]>('/api/umpires/:umpireId/games/latest', async (req, res, ctx) => {
        const { umpireId } = req.params;
        const targetGameList = gameList
            .filter((game) => game.umpire && game.umpire.id === Number(umpireId))
            .sort((a, b) => b.date.localeCompare(a.date))
            .slice(0, 5);

        if (!targetGameList)
            return res(ctx.status(400), ctx.json({ message: '해당 심판의 경기 정보가 존재하지 않습니다.' }));

        return res(ctx.status(200), ctx.json(targetGameList));
    }),

    rest.get<AtBat[]>('/api/umpires/:umpireId/atbats', async (req, res, ctx) => {
        const { umpireId } = req.params;
        const targetAtbatList = atBatList
            .filter((atbat) => atbat.umpire!.id === Number(umpireId))
            .sort((a, b) => b.date.localeCompare(a.date) || a.atBatIndex - b.atBatIndex);

        if (!targetAtbatList)
            return res(ctx.status(400), ctx.json({ message: '해당 심판의 타석 정보가 존재하지 않습니다.' }));

        return res(ctx.status(200), ctx.json(targetAtbatList));
    }),

    rest.get<AtBat[]>('/api/umpires/:umpireId/atbats/latest', async (req, res, ctx) => {
        const { umpireId } = req.params;
        const targetGameList = gameList
            .filter((game) => game.umpire && game.umpire.id === Number(umpireId))
            .sort((a, b) => b.date.localeCompare(a.date))
            .slice(0, 5)
            .map((game) => game.id);

        const targetAtbatList = atBatList
            .filter((atbat) => targetGameList.includes(atbat.game!.id))
            .sort((a, b) => b.date.localeCompare(a.date) || a.atBatIndex - b.atBatIndex);

        if (!targetAtbatList)
            return res(ctx.status(400), ctx.json({ message: '해당 심판의 타석 정보가 존재하지 않습니다.' }));

        return res(ctx.status(200), ctx.json(targetAtbatList));
    }),
];
