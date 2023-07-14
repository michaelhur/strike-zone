import { DYNAMIC_API_PATH } from '@constants/routes';

import { AtBat } from '@typings/atbat';
import { Game } from '@typings/game';
import { GetUmpireListRequest, Umpire } from '@typings/umpire';

import { fetcher } from '@src/apis/fetcher';

export const requestGetUmpireList = async (page: number, name?: string): Promise<GetUmpireListRequest> => {
    const range = `${(page - 1) * 10}-${page * 10 - 1}`;
    const basePath = DYNAMIC_API_PATH.UMPIRE_LIST();
    const path = name ? `${basePath}&name=eq.${name}` : basePath;
    return await fetcher({ method: 'get', path, headers: { Range: range } });
};

export const requestGetUmpire = async (umpireId: number): Promise<Umpire> => {
    const path = DYNAMIC_API_PATH.UMPIRE_DETAIL(umpireId);
    return await fetcher({ method: 'get', path });
};

export const requestGetGameListByUmpire = async (umpireId: number): Promise<Game[]> => {
    const path = DYNAMIC_API_PATH.UMPIRE_GAME_LIST(umpireId);
    return await fetcher({ method: 'get', path });
};

export const requestGetLastestGameListByUmpire = async (umpireId: number): Promise<Game[]> => {
    const gameList = await requestGetGameListByUmpire(umpireId);
    return gameList.slice(0, 5);
};

export const requestGetAtbatListByUmpire = async (umpireId: number): Promise<AtBat[]> => {
    const path = DYNAMIC_API_PATH.UMPIRE_ATBAT_LIST(umpireId);
    return await fetcher({ method: 'get', path });
};

export const requestGetLatestAtbatListByUmpire = async (umpireId: number): Promise<AtBat[]> => {
    const atbatList = await requestGetAtbatListByUmpire(umpireId);
    const latestGameList = await requestGetLastestGameListByUmpire(umpireId);
    const latestGameIdList = latestGameList.map((game) => game.id);

    return atbatList.filter((atbat) => latestGameIdList.includes(atbat.game.id));
};
