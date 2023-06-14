import { rest } from 'msw';

import { Game } from '../../src/typings/game';
import { gameList } from '../data/game';

export const gameHandler = [
    rest.get<Game[]>('/api/games', async (req, res, ctx) => {
        const date = req.url.searchParams.get('date');
        const season = Number(req.url.searchParams.get('season'));
        const teamId = Number(req.url.searchParams.get('team'));
        const umpireId = Number(req.url.searchParams.get('umpire'));
        const stateCode = req.url.searchParams.get('stateCode') || 'all';

        const filteredGameList = gameList.filter((game) => {
            const dateFilter = date ? game.date === date : true;
            const seasonFilter = season ? game.season === season : true;
            const teamFilter = teamId ? game.away!.id === teamId || game.home!.id === teamId : true;
            const umpireFilter = umpireId ? game.umpire!.id === umpireId : true;
            const stateCodeFilter =
                !stateCode || stateCode === 'all' ? true : stateCode === 'final' ? game.isFinal : game.isPostponed;

            return dateFilter && seasonFilter && teamFilter && umpireFilter && stateCodeFilter;
        });

        return res(ctx.status(200), ctx.json(filteredGameList));
    }),

    rest.get<Game>('/api/games/:slug', async (req, res, ctx) => {
        const { slug } = req.params;
        const targetGame = gameList.find((game) => game.slug === slug);

        if (!targetGame) return res(ctx.status(400), ctx.json({ message: '해당 경기가 존재하지 않습니다.' }));

        return res(ctx.status(200), ctx.json(targetGame));
    }),
];
