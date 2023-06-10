import axios from 'axios';
import { setupServer } from 'msw/node';
import { expect } from 'vitest';

import { leagueList } from '../data/league';
import { leagueHandler } from '../handlers/leagueHandler';

const server = setupServer(...leagueHandler);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('리그 API', () => {
    it('GET /api/leagues 요청은 리그 리스트 전체를 리턴한다', async () => {
        const response = await axios.get('/api/leagues');
        const data = response.data;

        expect(response.status).toBe(200);
        expect(data).toEqual(leagueList);
    });

    it('GET /api/leagues/:leagueId 요청은 특정 리그 정보를 리턴한다', async () => {
        const leagueId = 104;
        const response = await axios.get(`/api/leagues/${leagueId}`);
        const data = response.data;

        const targetLeague = leagueList.find((league) => league.id === leagueId);

        expect(response.status).toBe(200);
        expect(data).toEqual(targetLeague);
    });
});
