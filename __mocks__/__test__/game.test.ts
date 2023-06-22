import axios from 'axios';
import { setupServer } from 'msw/node';
import { expect } from 'vitest';

import { atBatList } from '../data/atBat';
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

    it('GET /api/games?leagues=103 요청은 AL 리그 경기 리스트를 리턴한다', async () => {
        const response = await axios.get(`/api/games?leagues=103`);
        const data = response.data;

        const ALGameList = gameList.filter((game) => game.home!.leagueId === 103 || game.away!.leagueId === 103);

        expect(response.status).toBe(200);
        expect(data).toEqual(ALGameList);
    });

    it('GET /api/games?leagues=104 요청은 NL 리그 경기 리스트를 리턴한다', async () => {
        const response = await axios.get(`/api/games?leagues=104`);
        const data = response.data;

        const NLGameList = gameList.filter((game) => game.home!.leagueId === 104 || game.away!.leagueId === 104);

        expect(response.status).toBe(200);
        expect(data).toEqual(NLGameList);
    });

    it('GET /api/games/get-by-id/:id 요청은 특정 경기의 정보를 리턴한다', async () => {
        const id = 718686;
        const response = await axios.get(`/api/games/get-by-id/${id}`);
        const data = response.data;

        const gameData = gameList.find((game) => game.id === id);

        expect(response.status).toBe(200);
        expect(data).toEqual(gameData);
    });

    it('GET /api/games/get-by-playerId/:id 요청은 특정 선수의 경기 리스트를 리턴한다', async () => {
        const id = 660670;
        const playerType = 'batter';
        const response = await axios.get(`/api/games/get-by-playerId/${id}?playerType=${playerType}`);
        const data = response.data;

        const gameIdList = atBatList
            .filter((atbat) =>
                !playerType
                    ? atbat.batter.id === Number(id) || atbat.pitcher.id === Number(id)
                    : playerType === 'batter'
                    ? atbat.batter.id === Number(id)
                    : atbat.pitcher.id === Number(id),
            )
            .map((atbat) => atbat.game.id);

        const uniqueIdList = [...new Set(gameIdList)];

        const filteredGameList = gameList
            .filter((game) => uniqueIdList.includes(game.id))
            .sort((a, b) => b.date.localeCompare(a.date));

        expect(response.status).toBe(200);
        expect(data).toEqual(filteredGameList);
    });

    it('GET /api/games/@latest 요청은 가장 최근 경기일을 리턴한다', async () => {
        const response = await axios.get(`/api/games/@latest`);
        const data = response.data;

        const maxDate = gameList.sort((a, b) => b.date.localeCompare(a.date))[0].date;
        const targetGameList = gameList.filter((game) => game.date === maxDate);

        expect(response.status).toBe(200);
        expect(data).toEqual(targetGameList);
    });

    it('GET /api/games/@latest 요청은 가장 최근 경기일을 리턴한다', async () => {
        const response = await axios.get(`/api/games/@latest-date`);
        const data = response.data;

        const maxDate = gameList.sort((a, b) => b.date.localeCompare(a.date))[0].date;
        const targetDate = { date: maxDate };
        expect(response.status).toBe(200);
        expect(data).toEqual(targetDate);
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
