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
        const date = '2023-04-06';
        const response = await axios.get(`/api/games?date=${date}`);
        const data = response.data;

        const gameListByDate = gameList.filter((game) => game.date === date);

        expect(response.status).toBe(200);
        expect(data).toEqual(gameListByDate);
    });

    it('GET /api/game?initialDate=:initialDate 요청은 특정 날짜 (최초 스케쥴 기준)의 경기 스케쥴을 리턴한다.', async () => {
        const initialDate = '2023-04-06';
        const response = await axios.get(`/api/games?initialDate=${initialDate}`);
        const data = response.data;

        const gameListByInitialDate = gameList.filter((game) => game.initialDate === initialDate);

        expect(response.status).toBe(200);
        expect(data).toEqual(gameListByInitialDate);
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
        const umpireId = 594151;
        const response = await axios.get(`/api/games?umpire=${umpireId}`);
        const data = response.data;

        const gameListByUmpire = gameList.filter((game) => game.umpire && game.umpire.id === umpireId);

        expect(response.status).toBe(200);
        expect(data).toEqual(gameListByUmpire);
    });

    it('GET /api/games?stateCode=final 요청은 종료된 경기 리스트를 리턴한다', async () => {
        const response = await axios.get(`/api/games?stateCode=final`);
        const data = response.data;

        const finalGameList = gameList.filter((game) => game.isFinal);

        expect(response.status).toBe(200);
        expect(data).toEqual(finalGameList);
    });

    it('GET /api/games?stateCode=postponed 요청은 취소 경기 리스트를 리턴한다', async () => {
        const response = await axios.get(`/api/games?stateCode=postponed`);
        const data = response.data;

        const postponedGameList = gameList.filter((game) => game.isPostponed);

        expect(response.status).toBe(200);
        expect(data).toEqual(postponedGameList);
    });

    it('GET /api/games/:slug 요청은 특정 경기의 정보를 리턴한다', async () => {
        const slug = '230406-TOR-KCA-1';
        const response = await axios.get(`/api/games/${slug}`);
        const data = response.data;

        const gameData = gameList.find((game) => game.slug && game.slug === slug);

        expect(response.status).toBe(200);
        expect(data).toEqual(gameData);
    });
});
