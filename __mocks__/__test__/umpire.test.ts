import axios from 'axios';
import { setupServer } from 'msw/node';
import { describe, expect } from 'vitest';

import { atBatList } from '../data/atBat';
import { gameList } from '../data/game';
import { umpireList } from '../data/umpire';
import { umpireHandler } from '../handlers/umpireHandler';

const server = setupServer(...umpireHandler);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('심판 API', () => {
    it('GET /api/umpires 요청은 심판 리스트를 리턴한다', async () => {
        const response = await axios.get('/api/umpires');
        const data = response.data;

        expect(response.status).toBe(200);
        expect(data).toEqual(umpireList);
    });

    it('GET /api/umpires?q=query 요청은 이름에 `query`가 포함된 모든 심판 리스트를 리턴한다', async () => {
        const query = 'Angel';
        const response = await axios.get(`/api/umpires?q=${query}`);
        const data = response.data;

        const umpireListByQuery = umpireList.filter((umpire) => umpire.name.toLowerCase().indexOf(query) !== -1);

        expect(response.status).toBe(200);
        expect(data).toEqual(umpireListByQuery);
    });

    it('GET /api/umpires/:umpireId 요청은 특정 심판의 정보를 리턴한다', async () => {
        const umpireId = 484183;
        const response = await axios.get(`/api/umpires/${umpireId}`);
        const data = response.data;

        const targetUmpire = umpireList.find((umpire) => umpire.id === umpireId);

        expect(response.status).toBe(200);
        expect(data).toEqual(targetUmpire);
    });

    it('GET /api/umpires/:umpireId/games 요청은 특정 심판의 경기 정보를 리턴한다', async () => {
        const umpireId = 484499;
        const response = await axios.get(`/api/umpires/${umpireId}/games`);
        const data = response.data;

        const targetGameList = gameList
            .filter((game) => game.umpire && game.umpire.id === umpireId)
            .sort((a, b) => b.date.localeCompare(a.date));

        expect(response.status).toBe(200);
        expect(data).toEqual(targetGameList);
    });

    it('GET /api/umpires/:umpireId/games/latest 요청은 특정 심판의 최신 경기 정보를 리턴한다', async () => {
        const umpireId = 484499;
        const response = await axios.get(`/api/umpires/${umpireId}/games/latest`);
        const data = response.data;

        const targetGameList = gameList
            .filter((game) => game.umpire && game.umpire.id === umpireId)
            .sort((a, b) => b.date.localeCompare(a.date))
            .slice(0, 5);

        expect(response.status).toBe(200);
        expect(data).toEqual(targetGameList);
    });

    it('GET /api/umpires/:umpireId/atbats 요청은 특정 심판의 타석 경기 정보를 리턴한다', async () => {
        const umpireId = 484499;
        const response = await axios.get(`/api/umpires/${umpireId}/atbats`);
        const data = response.data;

        const targetAtbatList = atBatList
            .filter((atbat) => atbat.umpire!.id === Number(umpireId))
            .sort((a, b) => b.date.localeCompare(a.date) || a.atBatIndex - b.atBatIndex);

        expect(response.status).toBe(200);
        expect(data).toEqual(targetAtbatList);
    });

    it('GET /api/umpires/:umpireId/atbats/latest 요청은 특정 심판의 타석 경기 정보를 리턴한다', async () => {
        const umpireId = 484499;
        const response = await axios.get(`/api/umpires/${umpireId}/atbats/latest`);
        const data = response.data;

        const targetGameList = gameList
            .filter((game) => game.umpire && game.umpire.id === Number(umpireId))
            .sort((a, b) => b.date.localeCompare(a.date))
            .slice(0, 5)
            .map((game) => game.id);

        const targetAtbatList = atBatList
            .filter((atbat) => targetGameList.includes(atbat.game!.id))
            .sort((a, b) => b.date.localeCompare(a.date) || a.atBatIndex - b.atBatIndex);

        if (!targetAtbatList) expect(response.status).toBe(200);
        expect(data).toEqual(targetAtbatList);
    });
});
