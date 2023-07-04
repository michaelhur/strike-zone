import { atBatList } from '@mocks/data/atBat';
import { gameList } from '@mocks/data/game';
import { rest } from 'msw';

import { AtBat } from '@typings/atbat';
import { Game } from '@typings/game';

import { GetPlayerListRequest } from '../../src/apis/player';
import { Player } from '../../src/typings/player';
import { getFetchOffsets } from '../../src/utils/url';
import { playerList } from '../data/player';

export const playerHandler = [
    rest.get<GetPlayerListRequest>('/api/players', async (req, res, ctx) => {
        const query = req.url.searchParams.get('q');
        const page = Number(req.url.searchParams.get('page'));
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
            const [start, end] = getFetchOffsets(page);
            return res(ctx.status(200), ctx.json({ players: filteredData.slice(start, end), count: totalCount }));
        }

        return res(ctx.status(200), ctx.json({ players: filteredData, count: totalCount }));
    }),

    rest.get<Player>(`/api/players/:slug`, async (req, res, ctx) => {
        const { slug } = req.params;
        const targetPlayer = playerList.find((player) => player.slug === slug);

        if (!targetPlayer) return res(ctx.status(400), ctx.json({ message: '해당 선수는 존재하지 않습니다' }));

        return res(ctx.status(200), ctx.json(targetPlayer));
    }),

    rest.get<Game[]>('/api/players/:slug/games', async (req, res, ctx) => {
        const { slug } = req.params;
        const playerType = req.url.searchParams.get('playerType');
        const page = req.url.searchParams.get('page');

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

        if (page && page.toLowerCase() !== 'all') {
            const [start, end] = getFetchOffsets(Number(page), 5);
            return res(ctx.status(200), ctx.json(filteredGameList.slice(start, end)));
        }

        return res(ctx.status(200), ctx.json(filteredGameList));
    }),

    rest.get<AtBat[]>(`/api/players/:slug/atbats`, async (req, res, ctx) => {
        const { slug } = req.params;
        const playerType = req.url.searchParams.get('playerType');

        const targetAtbatList = atBatList
            .filter((atbat) =>
                !playerType
                    ? atbat.batter.slug === slug || atbat.pitcher.slug === slug
                    : playerType === 'batter'
                    ? atbat.batter.slug === slug
                    : atbat.pitcher.slug === slug,
            )
            .sort((a, b) => b.date.localeCompare(a.date));

        if (!targetAtbatList)
            return res(ctx.status(400), ctx.json({ message: '해당 선수의 스트라이크존 기록은 존재하지 않습니다' }));

        return res(ctx.status(200), ctx.json(targetAtbatList));
    }),

    rest.get<AtBat[]>(`/api/players/:slug/atbats/latest`, async (req, res, ctx) => {
        const { slug } = req.params;
        const playerType = req.url.searchParams.get('playerType');

        const targetAtbatList = atBatList
            .filter((atbat) =>
                !playerType
                    ? atbat.batter.slug === slug || atbat.pitcher.slug === slug
                    : playerType === 'batter'
                    ? atbat.batter.slug === slug
                    : atbat.pitcher.slug === slug,
            )
            .sort((a, b) => b.date.localeCompare(a.date));

        if (!targetAtbatList)
            return res(ctx.status(400), ctx.json({ message: '해당 선수의 스트라이크존 기록은 존재하지 않습니다' }));

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
            .sort((a, b) => b.date.localeCompare(a.date))
            .slice(0, 5)
            .map((game) => game.id);

        const filteredTargetAtbatList = targetAtbatList.filter((atbat) => filteredGameList.includes(atbat.game.id));

        return res(ctx.status(200), ctx.json(filteredTargetAtbatList));
    }),
];
