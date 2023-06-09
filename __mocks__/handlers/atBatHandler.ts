import { rest } from 'msw';

import { AtBat } from '../../src/typings/atbat';
import { atBatList } from '../data/atbat';

export const atBatHandler = [
    rest.get<AtBat[]>('/api/atbats', async (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(atBatList));
    }),

    rest.get<AtBat[]>('/api/games/:slug', async (req, res, ctx) => {
        const { slug } = req.params;
        const gameData = atBatList.filter((atbat) => atbat.game.slug === slug);
        return res(ctx.status(200), ctx.json(gameData));
    }),

    rest.get<AtBat[]>('/api/teams/:teamId', async (req, res, ctx) => {
        const { teamId } = req.params;
        const teamData = atBatList.filter(
            (atbat) => atbat.away.id === Number(teamId) || atbat.home.id === Number(teamId),
        );
        return res(ctx.status(200), ctx.json(teamData));
    }),

    rest.get<AtBat[]>('/api/pitchers/:pitcherId', async (req, res, ctx) => {
        const { pitcherId } = req.params;
        const pitcherData = atBatList.filter((atbat) => atbat.pitcher.id === Number(pitcherId));
        return res(ctx.status(200), ctx.json(pitcherData));
    }),

    rest.get<AtBat[]>('/api/batters/:batterId', async (req, res, ctx) => {
        const { batterId } = req.params;
        const batterData = atBatList.filter((atbat) => atbat.batter.id === Number(batterId));
        return res(ctx.status(200), ctx.json(batterData));
    }),

    rest.get<AtBat[]>('/api/umpires/:umpireId', async (req, res, ctx) => {
        const { umpireId } = req.params;
        const umpireData = atBatList.filter((atbat) => atbat.umpire.id === Number(umpireId));
        return res(ctx.status(200), ctx.json(umpireData));
    }),
];
