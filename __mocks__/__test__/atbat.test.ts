import axios from 'axios';
import { setupServer } from 'msw/node';

import { atBatList } from '../data/atbat';
import { atBatHandler } from '../handlers/atBatHandler';

// Create a new server instance
const server = setupServer(...atBatHandler);

// Before running your tests, start the server
beforeAll(() => server.listen());

// After running your tests, clean up and reset server handlers
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('API Tests', () => {
    it('GET /api/atbats should yield entire atbat dataset', async () => {
        const response = await axios.get('/api/atbats');
        const data = response.data;

        expect(response.status).toBe(200);
        expect(data).toEqual(atBatList);
    });

    it('should mock a GET request to /api/atbats?date=:date', async () => {
        const date = '2023-04-01';
        const response = await axios.get(`/api/atbats?date=${date}`);
        const data = response.data;

        const dateData = atBatList.filter((atbat) => atbat.date === date);

        expect(response.status).toBe(200);
        expect(data).toEqual(dateData);
    });

    it('should mock a GET request to /api/atbats?game=:slug', async () => {
        const slug = '230401-MIL-CHN-1';
        const response = await axios.get(`/api/atbats?game=${slug}`);
        const data = response.data;

        const gameData = atBatList.filter((atbat) => atbat.game.slug === slug);

        expect(response.status).toBe(200);
        expect(data).toEqual(gameData);
    });

    it('should mock a GET request to /api/atbats?team=:teamId', async () => {
        const teamId = 112;
        const response = await axios.get(`/api/atbats?team=${teamId}`);
        const data = response.data;

        const teamData = atBatList.filter(
            (atbat) => atbat.away.id === Number(teamId) || atbat.home.id === Number(teamId),
        );
        expect(response.status).toBe(200);
        expect(data).toEqual(teamData);
    });

    it('should mock a GET request to /api/atbats?pitcher=:pitcherId', async () => {
        const pitcherId = 657006;
        const response = await axios.get(`/api/atbats?pitcher=${pitcherId}`);
        const data = response.data;

        const pitcherData = atBatList.filter((atbat) => atbat.pitcher.id === Number(pitcherId));

        expect(response.status).toBe(200);
        expect(data).toEqual(pitcherData);
    });

    it('should mock a GET request to /api/atbats?batter=:batterId', async () => {
        const batterId = 642715;
        const response = await axios.get(`/api/atbats?batter=${batterId}`);
        const data = response.data;

        const batterData = atBatList.filter((atbat) => atbat.batter.id === Number(batterId));

        expect(response.status).toBe(200);
        expect(data).toEqual(batterData);
    });

    it('should mock a GET request to /api/atbats?umpire=:umpireId', async () => {
        const umpireId = 484183;
        const response = await axios.get(`/api/atbats?umpire=${umpireId}`);
        const data = response.data;

        const umpireData = atBatList.filter((atbat) => atbat.umpire.id === Number(umpireId));

        expect(response.status).toBe(200);
        expect(data).toEqual(umpireData);
    });
});
