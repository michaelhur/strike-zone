import { DYNAMIC_API_PATH } from '@constants/routes';

import { AtBat } from '@typings/atbat';
import { Game } from '@typings/game';
import { GetUmpireListRequest, Umpire } from '@typings/umpire';

import { fetcher } from '@src/apis/fetcher';

export const requestGetUmpireList = async (page: number, name?: string): Promise<GetUmpireListRequest> => {
    const range = `${(page - 1) * 10}-${page * 10 - 1}`;
    const basePath = DYNAMIC_API_PATH.UMPIRE_LIST();
    const path = name ? `${basePath}&name=eq.${name}` : basePath;
    const response = await fetcher({ method: 'get', path, headers: { Range: range, Prefer: 'count=exact' } });
    const data = response!.data;
    const count = response!.headers['content-range'].split('/')[1];
    return { umpires: data, count };
};

export const requestGetUmpire = async (umpireId: number): Promise<Umpire> => {
    const path = DYNAMIC_API_PATH.UMPIRE_DETAIL(umpireId);
    const response = await fetcher({ method: 'get', path });
    return response!.data[0];
};

export const requestGetGameListByUmpire = async (umpireId: number): Promise<Game[]> => {
    const path = DYNAMIC_API_PATH.UMPIRE_GAME_LIST(umpireId);
    const response = await fetcher({ method: 'get', path });
    return response!.data;
};

export const requestGetLastestGameListByUmpire = async (umpireId: number): Promise<Game[]> => {
    const gameList = await requestGetGameListByUmpire(umpireId);
    return gameList.slice(0, 10);
};

export const requestGetAtbatListByUmpire = async (umpireId: number): Promise<AtBat[]> => {
    const path = DYNAMIC_API_PATH.UMPIRE_ATBAT_LIST(umpireId);
    const response = await fetcher({ method: 'get', path });
    return response!.data;
};

export const requestGetLatestAtbatListByUmpire = async (umpireId: number): Promise<AtBat[]> => {
    const atbatList = await requestGetAtbatListByUmpire(umpireId);
    const latestGameList = await requestGetLastestGameListByUmpire(umpireId);
    const latestGameIdList = latestGameList.map((game) => game.id);

    return atbatList.filter((atbat) => latestGameIdList.includes(atbat.game.id));
};
