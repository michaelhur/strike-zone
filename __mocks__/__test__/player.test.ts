import axios from 'axios';
import { setupServer } from 'msw/node';
import { describe, expect } from 'vitest';

import { playerList } from '../data/player';
import { playerHandler } from '../handlers/playerHandler';

const server = setupServer(...playerHandler);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('선수 API', () => {
    it('GET /api/players 요청은 모든 선수 리스트를 리턴한다.', async () => {
        const response = await axios.get(`/api/players`);
        const data = response.data;
        const playerList = data.players;

        expect(response.status).toBe(200);
        expect(playerList).toEqual(playerList);
    });

    it('GET /api/players?page=:pageNumber 요청은 특정 페이지 선수 리스트를 리턴한다.', async () => {
        const pageNumber = 1;
        const response = await axios.get(`/api/players?page=${pageNumber}`);
        const data = response.data;
        const playerList = data.players;

        const firstPagePlayerList = playerList.slice(0, 9);

        expect(response.status).toBe(200);
        expect(playerList).toEqual(firstPagePlayerList);
    });

    it('GET /api/players?q=:query 요청은 이름에 query가 포함된 선수 리스트를 리턴한다.', async () => {
        const query = 'Ryu';
        const response = await axios.get(`/api/players?q=${query}`);
        const data = response.data;
        const playerList = data.players;

        const playerListByQuery = playerList.filter((player) => player.name.toLowerCase().indexOf(query) !== -1);

        expect(response.status).toBe(200);
        expect(playerList).toEqual(playerListByQuery);
    });

    it('GET /api/players?positionType=:positionType 요청은 특정 포지션 유형의 선수만 리턴한다.', async () => {
        const positionType = 'Pitcher';
        const response = await axios.get(`/api/players?positionType=${positionType}`);
        const data = response.data;
        const playerList = data.players;

        const pitcherList = playerList.filter((player) => player.positionType === positionType);

        expect(response.status).toBe(200);
        expect(playerList).toEqual(pitcherList);
    });

    it('GET /api/players?positionCode=:positionCode 요청은 특정 포지션 유형의 선수만 리턴한다.', async () => {
        const positionCode = 'SS';
        const response = await axios.get(`/api/players?positionCode=${positionCode}`);
        const data = response.data;
        const playerList = data.players;

        const shortstopList = playerList.filter((player) => player.positionCode === positionCode);

        expect(response.status).toBe(200);
        expect(playerList).toEqual(shortstopList);
    });

    it('GET /api/players/:slug 요청은 특정 선수의 정보를 리턴한다.', async () => {
        const slug = 'fernando-abad-472551';
        const response = await axios.get(`/api/players/${slug}`);
        const data = response.data;

        const playerData = playerList.find((player) => player.slug === slug);

        expect(response.status).toBe(200);
        expect(data).toEqual(playerData);
    });
});
