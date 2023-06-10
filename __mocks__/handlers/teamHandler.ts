import { rest } from 'msw';

import { Team } from '../../src/typings/team';
import { teamList } from '../data/team';

export const teamHandler = [
    rest.get<Team[]>('/api/teams', async (req, res, ctx) => {
        const query = req.url.searchParams.get('q');
        const leagueId = Number(req.url.searchParams.get('leagues'));
        const divisionId = Number(req.url.searchParams.get('divisions'));

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
];
