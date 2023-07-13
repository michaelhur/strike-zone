import { AnyOBJ } from '@src/typings';

export const parseParmsToObject = (searchParams: string): AnyOBJ => {
    return Object.fromEntries(new URLSearchParams(searchParams));
};

export const getFetchOffsets = (page: number, offset = 10): number[] => {
    const start = (page - 1) * offset;
    const end = page * offset;

    return [start, end];
};

export const convertBaseAPIUri = (baseURI: string): string => {
    switch (baseURI) {
        case '/api/atbats':
            return '/atbat?select=id,date,atBatIndex,isTopInning,inning,home:homeId(*),away:awayId(*),batter:batterId(*),pitcher:pitcherId(*),game:gameId!inner(*),umpire:umpireId!inner(*),plays';
        case '/api/games':
            return '/game?select=id,slug,date,season,home:homeId(*),away:awayId(*),umpire:umpireId(*),homeScore,awayScore,isFinal,isPostponed,initialDate';
        case '/api/divisions':
            return '/division?select=*';
        case '/api/leagues':
            return '/league?select=*';
        case '/api/players':
            return '/player?order=lastName.asc&select=id,name,lastName,batSide,pitchHand,positionCode,positionType,height,weight,playerNumber,slug,team:teamId(*)';
        case '/api/teams':
            return '/team?select=id,name,abbreviation,franchiseName,teamName,imageUrl,league:leagueId(*),division:divisionId(*),venue';
        case '/api/umpires':
            return '/umpire?select=*';
        default:
            return baseURI;
    }
};

export const convertSearchParamsToPOSTREST = (uri: string | undefined): string => {
    if (!uri) return '';

    const baseURI = new URL(`http://www.base.com/?${uri}`);
    const searchParams = new URLSearchParams(baseURI.search);

    let postrestUri = '';

    for (const [key, value] of searchParams.entries()) {
        postrestUri += `&${key}=eq.${value}`;
    }

    return postrestUri;
};

export const convertAPIUriToPOSTREST = (uri: string): string => {
    const [baseURI, searchParams] = uri.split('?');
    const convertedURI = `${convertBaseAPIUri(baseURI)}${convertSearchParamsToPOSTREST(searchParams)}`;

    return convertedURI;
};
