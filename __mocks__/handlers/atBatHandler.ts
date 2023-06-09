import { rest } from 'msw';

import { AtBat } from '../../src/typings/atbat';
import { atbatList } from '../data/atbat';

export const atBatHandler = [
    rest.get<AtBat[], any>('/api/atbats', async (req, res, ctx) => {
        const date = req.url.searchParams.get('date');
        const slug = req.url.searchParams.get('game');
        const teamId = Number(req.url.searchParams.get('team'));
        const pitcherId = Number(req.url.searchParams.get('pitcher'));
        const batterId = Number(req.url.searchParams.get('batter'));
        const umpireId = Number(req.url.searchParams.get('umpire'));

        const filteredData = atbatList.filter((atbat) => {
            const dateFilter = date ? atbat.date === date : true;
            const slugFilter = slug ? atbat.game.slug === slug : true;
            const teamFilter = teamId ? atbat.away.id === teamId || atbat.home.id === teamId : true;
            const pitcherFilter = pitcherId ? atbat.pitcher.id === pitcherId : true;
            const batterFilter = batterId ? atbat.batter.id === batterId : true;
            const umpireFilter = umpireId ? atbat.umpire.id === umpireId : true;

            return dateFilter && slugFilter && teamFilter && pitcherFilter && batterFilter && umpireFilter;
        });

        return res(ctx.status(200), ctx.json(filteredData));
    }),
];
