import axios from 'axios';
import { setupServer } from 'msw/node';
import { describe, expect } from 'vitest';

import { atBatList } from '../data/atBat';
import { gameList } from '../data/game';
import { teamList } from '../data/team';
import { teamHandler } from '../handlers/teamHandler';

const server = setupServer(...teamHandler);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('팀 API', () => {
    it('GET /api/teams 요청은 모든 팀 정보를 리턴한다', async () => {
        const response = await axios.get('/api/teams');
        const data = response.data;

        expect(response.status).toBe(200);
        expect(data).toEqual(teamList);
    });

    it('GET /api/teams?q=:query 요청은 팀 이름 또는 이니셜에 query가 포함된 팀 리스트를 리턴한다', async () => {
        const query = 'Red';
        const response = await axios.get(`/api/teams?q=${query}`);
        const data = response.data;

        const teamListByQuery = teamList.filter(
            (team) =>
                team.name.toLowerCase().indexOf(query) !== -1 || team.abbreviation.toLowerCase().indexOf(query) !== -1,
        );

        expect(response.status).toBe(200);
        expect(data).toEqual(teamListByQuery);
    });

    it('GET /api/teams?leagueId=:leagueId 요청은 특정 리그의 모든 팀 정보를 리턴한다', async () => {
        const leagueId = 104;
        const response = await axios.get(`/api/teams?leagueId=${leagueId}`);
        const data = response.data;

        const teamListByLeague = teamList.filter((team) => team.league!.id === leagueId);

        expect(response.status).toBe(200);
        expect(data).toEqual(teamListByLeague);
    });

    it('GET /api/teams?divisionId=:divisionId 요청은 특정 디비젼의 모든 팀 정보를 리턴한다', async () => {
        const divisionId = 204;
        const response = await axios.get(`/api/teams?divisionId=${divisionId}`);
        const data = response.data;

        const teamListByDivision = teamList.filter((team) => team.division!.id === divisionId);

        expect(response.status).toBe(200);
        expect(data).toEqual(teamListByDivision);
    });

    it('GET /api/teams/:teamId 요청은 특정 팀 정보를 리턴한다', async () => {
        const teamId = 144;
        const response = await axios.get(`/api/teams/${teamId}`);
        const data = response.data;

        const targetTeam = teamList.find((team) => team.id === teamId);

        expect(response.status).toBe(200);
        expect(data).toEqual(targetTeam);
    });

    it('GET /api/teams/:teamId/games 요청은 특정 팀 정보를 리턴한다', async () => {
        const teamId = 144;
        const response = await axios.get(`/api/teams/${teamId}/games`);
        const data = response.data;

        const targetGameList = gameList
            .filter((game) => game.home!.id === Number(teamId) || game.away!.id === Number(teamId))
            .sort((a, b) => b.date.localeCompare(a.date));

        expect(response.status).toBe(200);
        expect(data).toEqual(targetGameList);
    });

    it('GET /api/teams/:teamId/games/latest 요청은 특정 팀 정보를 리턴한다', async () => {
        const teamId = 144;
        const response = await axios.get(`/api/teams/${teamId}/games/latest`);
        const data = response.data;

        const targetGameList = gameList
            .filter((game) => game.home!.id === Number(teamId) || game.away!.id === Number(teamId))
            .sort((a, b) => b.date.localeCompare(a.date))
            .slice(0, 5);

        expect(response.status).toBe(200);
        expect(data).toEqual(targetGameList);
    });

    it('GET /api/teams/:teamId/atbats 요청은 특정 팀 정보를 리턴한다', async () => {
        const teamId = 144;
        const response = await axios.get(`/api/teams/${teamId}/atbats`);
        const data = response.data;

        const targetAtbatList = atBatList
            .filter((atbat) => atbat.home!.id === Number(teamId) || atbat.away!.id === Number(teamId))
            .sort((a, b) => b.date.localeCompare(a.date) || a.atBatIndex - b.atBatIndex);

        expect(response.status).toBe(200);
        expect(data).toEqual(targetAtbatList);
    });

    it('GET /api/teams/:teamId/atbats/latest 요청은 특정 팀 정보를 리턴한다', async () => {
        const teamId = 144;
        const response = await axios.get(`/api/teams/${teamId}/atbats/latest`);
        const data = response.data;

        const targetGameList = gameList
            .filter((game) => game.home!.id === Number(teamId) || game.away!.id === Number(teamId))
            .sort((a, b) => b.date.localeCompare(a.date))
            .slice(0, 5)
            .map((game) => game.id);

        const targetAtbatList = atBatList
            .filter((atbat) => targetGameList.includes(atbat.game!.id))
            .sort((a, b) => b.date.localeCompare(a.date) || a.atBatIndex - b.atBatIndex);

        expect(response.status).toBe(200);
        expect(data).toEqual(targetAtbatList);
    });
});
