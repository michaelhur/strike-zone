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

        expect(response.status).toBe(200);
        expect(data).toEqual(playerList);
    });

    it('GET /api/players/:playerId 요청은 특정 선수의 정보를 리턴한다.', async () => {
        const playerId = 657006;
        const response = await axios.get(`/api/players/${playerId}`);
        const data = response.data;

        const playerData = playerList.find((player) => player.id === playerId);

        expect(response.status).toBe(200);
        expect(data).toEqual(playerData);
    });
});
