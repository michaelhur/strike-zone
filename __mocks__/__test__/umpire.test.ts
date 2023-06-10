import axios from 'axios';
import { setupServer } from 'msw/node';
import { describe, expect } from 'vitest';

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
});
