import axios from 'axios';
import { setupServer } from 'msw/node';
import { expect } from 'vitest';

import { divisionList } from '../data/division';
import { divisionHandler } from '../handlers/divisionHandler';

const server = setupServer(...divisionHandler);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Division API', () => {
    it('GET /api/divisions 요청은 디비전 리스트 전체를 리턴한다', async () => {
        const response = await axios.get('/api/divisions');
        const data = response.data;

        expect(response.status).toBe(200);
        expect(data).toEqual(divisionList);
    });

    it('GET /api/divisions/:divisionId 요청은 특정 리그 정보를 리턴한다', async () => {
        const divisionId = 200;
        const response = await axios.get(`/api/divisions/${divisionId}`);
        const data = response.data;

        const targetDivision = divisionList.find((division) => division.id === divisionId);

        expect(response.status).toBe(200);
        expect(data).toEqual(targetDivision);
    });
});
