import axios from 'axios';
import { setupServer } from 'msw/node';

import { atBatList } from '../data/atBat';
import { atBatHandler } from '../handlers/atBatHandler';

const server = setupServer(...atBatHandler);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('타석 API', () => {
    it('GET /api/atbats 요청은 모든 타석 정보를 리턴한다.t', async () => {
        const response = await axios.get('/api/atbats');
        const data = response.data;

        expect(response.status).toBe(200);
        expect(data).toEqual(atBatList);
    });

    it('GET /api/atbats?date=:date 요청은 특정 날짜의 모든 타석 정보를 리턴한다.', async () => {
        const date = '2023-04-06';
        const response = await axios.get(`/api/atbats?date=${date}`);
        const data = response.data;

        const dateData = atBatList.filter((atbat) => atbat.date === date);

        expect(response.status).toBe(200);
        expect(data).toEqual(dateData);
    });

    it('GET /api/atbats?game=:slug 요청은 특정 경기의 모든 타석 정보를 리턴한다.', async () => {
        const slug = '230406-SDN-ATL-1';
        const response = await axios.get(`/api/atbats?game=${slug}`);
        const data = response.data;

        const gameData = atBatList.filter((atbat) => atbat.game.slug === slug);

        expect(response.status).toBe(200);
        expect(data).toEqual(gameData);
    });

    it('GET /api/atbats?team=:teamId 요청은 특정 팀의 모든 타석 정보를 리턴한다.', async () => {
        const teamId = 144;
        const response = await axios.get(`/api/atbats?team=${teamId}`);
        const data = response.data;

        const teamData = atBatList.filter(
            (atbat) => atbat.away.id === Number(teamId) || atbat.home.id === Number(teamId),
        );
        expect(response.status).toBe(200);
        expect(data).toEqual(teamData);
    });

    it('GET /api/atbats?pitcher=:pitcherId 요청은 특정 투수의 모든 타석 정보를 리턴한다.', async () => {
        const pitcherId = 605483;
        const response = await axios.get(`/api/atbats?pitcher=${pitcherId}`);
        const data = response.data;

        const pitcherData = atBatList.filter((atbat) => atbat.pitcher.id === Number(pitcherId));

        expect(response.status).toBe(200);
        expect(data).toEqual(pitcherData);
    });

    it('GET /api/atbats?batter=:batterId 요청은 특정 타자의 모든 타석 정보를 리턴한다.', async () => {
        const batterId = 621566;
        const response = await axios.get(`/api/atbats?batter=${batterId}`);
        const data = response.data;

        const batterData = atBatList.filter((atbat) => atbat.batter.id === Number(batterId));

        expect(response.status).toBe(200);
        expect(data).toEqual(batterData);
    });

    it('GET /api/atbats?umpire=:umpireId 요청은 특정 심판의 모든 타석 정보를 리턴한다.', async () => {
        const umpireId = 605672;
        const response = await axios.get(`/api/atbats?umpire=${umpireId}`);
        const data = response.data;

        const umpireData = atBatList.filter((atbat) => atbat.umpire.id === Number(umpireId));

        expect(response.status).toBe(200);
        expect(data).toEqual(umpireData);
    });
});
