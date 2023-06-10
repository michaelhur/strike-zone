import axios from 'axios';
import { setupServer } from 'msw/node';
import { expect } from 'vitest';

import { gameList } from '../data/game';
import { gameHandler } from '../handlers/gameHandler';

const server = setupServer(...gameHandler);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('경기 API', () => {
    it('GET /api/game 요청은 모든 경기 스케쥴을 리턴한다', async () => {
        const response = await axios.get('/api/games');
        const data = response.data;

        expect(response.status).toBe(200);
        expect(data).toEqual(gameList);
    });

    it('GET /api/game?date=:date 요청은 특정 날짜의 경기 스케쥴을 리턴한다.', async () => {
        const date = '2023-04-01';
        const response = await axios.get(`/api/games?date=${date}`);
        const data = response.data;

        const gameListByDate = gameList.filter((game) => game.date === date);

        expect(response.status).toBe(200);
        expect(data).toEqual(gameListByDate);
    });

    it('GET /api/game?season=:season 요청은 특정 시즌의 경기 스케쥴을 리턴한다', async () => {
        const season = 2023;
        const response = await axios.get(`/api/games?season=${season}`);
        const data = response.data;

        const gameListBySeason = gameList.filter((game) => game.season === season);

        expect(response.status).toBe(200);
        expect(data).toEqual(gameListBySeason);
    });

    it('GET /api/game?team=:teamId 요청은 특정 팀의 경기 스케쥴을 리턴한다', async () => {
        const teamId = 144;
        const response = await axios.get(`/api/games?team=${teamId}`);
        const data = response.data;

        const gameListByTeam = gameList.filter((game) => game.away!.id === teamId || game.home!.id === teamId);

        expect(response.status).toBe(200);
        expect(data).toEqual(gameListByTeam);
    });

    it('GET /api/games?umpire=:umpireId 요청은 특정 심판의 경기 스케쥴을 리턴한다', async () => {
        const umpireId = 484183;
        const response = await axios.get(`/api/games?umpire=${umpireId}`);
        const data = response.data;

        const gameListByUmpire = gameList.filter((game) => game.umpire!.id === umpireId);

        expect(response.status).toBe(200);
        expect(data).toEqual(gameListByUmpire);
    });

    it('GET /api/games/:slug 요청은 특정 경기의 정보를 리턴한다', async () => {
        const slug = '230401-MIL-CHN-1';
        const response = await axios.get(`/api/games/${slug}`);
        const data = response.data;

        const gameData = gameList.find((game) => game.slug === slug);

        expect(response.status).toBe(200);
        expect(data).toEqual(gameData);
    });
});