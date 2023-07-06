import { atBatList } from '@mocks/data/atBat';
import { gameList } from '@mocks/data/game';
import { rest } from 'msw';

import { AtBat } from '@typings/atbat';
import { Game } from '@typings/game';

import { Team } from '../../src/typings/team';
import { teamList } from '../data/team';

export const teamHandler = [
    rest.get<Team[]>('/api/teams', async (req, res, ctx) => {
        const query = req.url.searchParams.get('q');
        const leagueId = Number(req.url.searchParams.get('leagueId'));
        const divisionId = Number(req.url.searchParams.get('divisionId'));

        const filteredData = teamList.filter((team) => {
            const queryFilter = query
                ? team.name.toLowerCase().indexOf(query) !== -1 || team.abbreviation.toLowerCase().indexOf(query) !== -1
                : true;
            const leagueFilter = leagueId ? team.league!.id === leagueId : true;
            const divisionFilter = divisionId ? team.division!.id === divisionId : true;

            return queryFilter && leagueFilter && divisionFilter;
        });

        return res(ctx.status(200), ctx.json(filteredData));
    }),

    rest.get<Team>('/api/teams/:teamId', async (req, res, ctx) => {
        const { teamId } = req.params;
        const targetTeam = teamList.find((team) => team.id === Number(teamId));

        if (!targetTeam) return res(ctx.status(400), ctx.json({ message: '해당 팀 정보가 존재하지 않습니다.' }));

        return res(ctx.status(200), ctx.json(targetTeam));
    }),

    rest.get<Game[]>('/api/teams/:teamId/games', async (req, res, ctx) => {
        const { teamId } = req.params;
        const targetGameList = gameList
            .filter((game) => game.home!.id === Number(teamId) || game.away!.id === Number(teamId))
            .sort((a, b) => b.date.localeCompare(a.date));

        if (!targetGameList)
            return res(ctx.status(400), ctx.json({ message: '해당 팀의 경기 정보가 존재하지 않습니다.' }));

        return res(ctx.status(200), ctx.json(targetGameList));
    }),

    rest.get<Game[]>('/api/teams/:teamId/games/latest', async (req, res, ctx) => {
        const { teamId } = req.params;
        const targetGameList = gameList
            .filter((game) => game.home!.id === Number(teamId) || game.away!.id === Number(teamId))
            .sort((a, b) => b.date.localeCompare(a.date))
            .slice(0, 5);

        if (!targetGameList)
            return res(ctx.status(400), ctx.json({ message: '해당 팀의 경기 정보가 존재하지 않습니다.' }));

        return res(ctx.status(200), ctx.json(targetGameList));
    }),

    rest.get<AtBat[]>('/api/teams/:teamId/atbats', async (req, res, ctx) => {
        const { teamId } = req.params;
        const targetAtbatList = atBatList
            .filter((atbat) => atbat.home!.id === Number(teamId) || atbat.away!.id === Number(teamId))
            .sort((a, b) => b.date.localeCompare(a.date) || a.atBatIndex - b.atBatIndex);

        if (!targetAtbatList)
            return res(ctx.status(400), ctx.json({ message: '해당 팀의 타석 정보가 존재하지 않습니다.' }));

        return res(ctx.status(200), ctx.json(targetAtbatList));
    }),

    rest.get<AtBat[]>('/api/teams/:teamId/atbats/latest', async (req, res, ctx) => {
        const { teamId } = req.params;
        const targetGameList = gameList
            .filter((game) => game.home!.id === Number(teamId) || game.away!.id === Number(teamId))
            .sort((a, b) => b.date.localeCompare(a.date))
            .slice(0, 5)
            .map((game) => game.id);

        const targetAtbatList = atBatList
            .filter((atbat) => targetGameList.includes(atbat.game!.id))
            .sort((a, b) => b.date.localeCompare(a.date) || a.atBatIndex - b.atBatIndex);

        if (!targetAtbatList) return res(ctx.status(400), ctx.json({ message: '해당 팀 정보가 존재하지 않습니다.' }));

        return res(ctx.status(200), ctx.json(targetAtbatList));
    }),
];
