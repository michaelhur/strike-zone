import { rest } from 'msw';

import { dateString } from '../../src/typings';
import { Game } from '../../src/typings/game';
import { atBatList } from '../data/atBat';
import { gameList } from '../data/game';

export const gameHandler = [
    rest.get<Game[]>('/api/games', async (req, res, ctx) => {
        const date = req.url.searchParams.get('date');
        const initialDate = req.url.searchParams.get('initialDate');
        const season = Number(req.url.searchParams.get('season'));
        const teamId = Number(req.url.searchParams.get('team'));
        const umpireId = Number(req.url.searchParams.get('umpire'));
        const stateCode = req.url.searchParams.get('stateCode') || 'all';
        const leagueId = Number(req.url.searchParams.get('leagues'));

        const filteredGameList = gameList.filter((game) => {
            const dateFilter = date ? game.date === date : true;
            const initialDateFilter = initialDate ? game.initialDate === initialDate : true;
            const seasonFilter = season ? game.season === season : true;
            const teamFilter = teamId ? game.away!.id === teamId || game.home!.id === teamId : true;
            const umpireFilter = umpireId ? game.umpire && game.umpire.id === umpireId : true;
            const stateCodeFilter =
                !stateCode || stateCode === 'all' ? true : stateCode === 'final' ? game.isFinal : game.isPostponed;
            const leagueFilter = leagueId ? game.home!.leagueId === leagueId || game.away!.leagueId === leagueId : true;

            return (
                dateFilter &&
                initialDateFilter &&
                seasonFilter &&
                teamFilter &&
                umpireFilter &&
                stateCodeFilter &&
                leagueFilter
            );
        });

        return res(ctx.status(200), ctx.json(filteredGameList));
    }),

    rest.get<dateString>('/api/games/@latest-date', async (req, res, ctx) => {
        const maxDate = gameList.sort((a, b) => b.date.localeCompare(a.date))[0].date;

        return res(ctx.status(200), ctx.json({ date: maxDate }));
    }),

    rest.get<Game[]>('/api/games/@latest', async (req, res, ctx) => {
        const maxDate = gameList.sort((a, b) => b.date.localeCompare(a.date))[0].date;
        const targetGameList = gameList.filter((game) => game.date === maxDate);

        return res(ctx.status(200), ctx.json(targetGameList));
    }),

    rest.get<Game[]>('/api/games/get-by-playerId/:id', async (req, res, ctx) => {
        const { id } = req.params;
        const playerType = req.url.searchParams.get('playerType');

        const gameIdList = atBatList
            .filter((atbat) =>
                !playerType
                    ? atbat.batter.id === Number(id) || atbat.pitcher.id === Number(id)
                    : playerType === 'batter'
                    ? atbat.batter.id === Number(id)
                    : atbat.pitcher.id === Number(id),
            )
            .map((atbat) => atbat.game.id);

        const uniqueIdList = [...new Set(gameIdList)];

        const filteredGameList = gameList
            .filter((game) => uniqueIdList.includes(game.id))
            .sort((a, b) => b.date.localeCompare(a.date));

        return res(ctx.status(200), ctx.json(filteredGameList));
    }),

    rest.get<Game[]>('/api/games/get-by-playerSlug/:slug', async (req, res, ctx) => {
        const { slug } = req.params;
        const playerType = req.url.searchParams.get('playerType');

        const gameIdList = atBatList
            .filter((atbat) =>
                !playerType
                    ? atbat.batter.slug === slug || atbat.pitcher.slug === slug
                    : playerType === 'batter'
                    ? atbat.batter.slug === slug
                    : atbat.pitcher.slug === slug,
            )
            .map((atbat) => atbat.game.id);

        const uniqueIdList = [...new Set(gameIdList)];

        const filteredGameList = gameList
            .filter((game) => uniqueIdList.includes(game.id))
            .sort((a, b) => b.date.localeCompare(a.date));

        return res(ctx.status(200), ctx.json(filteredGameList));
    }),

    rest.get<Game>('/api/games/get-by-id/:id', async (req, res, ctx) => {
        const { id } = req.params;
        const targetGame = gameList.find((game) => game.id === Number(id));

        if (!targetGame) return res(ctx.status(400), ctx.json({ message: '해당 경기가 존재하지 않습니다.' }));

        return res(ctx.status(200), ctx.json(targetGame));
    }),

    rest.get<Game>('/api/games/:slug', async (req, res, ctx) => {
        const { slug } = req.params;
        const targetGame = gameList.find((game) => game.slug && game.slug === slug);

        if (!targetGame) return res(ctx.status(400), ctx.json({ message: '해당 경기가 존재하지 않습니다.' }));

        return res(ctx.status(200), ctx.json(targetGame));
    }),
];
