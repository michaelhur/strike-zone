import { AnyOBJ } from '@src/typings';

export const parseParmsToObject = (searchParams: string): AnyOBJ => {
    return Object.fromEntries(new URLSearchParams(searchParams));
};

export const getFetchOffsets = (page: number, offset = 10): number[] => {
    const start = (page - 1) * offset;
    const end = page * offset;

    return [start, end];
};

export const convertBaseAPIUri = (baseURI: string, id?: number, slug?: string): string => {
    switch (baseURI) {
        case `/api/atbats`:
            return `/atbat?select=id,date,atBatIndex,isTopInning,inning,home:homeId(*),away:awayId(*),batter:batterId(*),pitcher:pitcherId(*),game:gameId!inner(*),umpire:umpireId!inner(*),plays`;
        case `/api/atbats/${slug}`:
            return `/atbat?select=id,date,atBatIndex,isTopInning,inning,home:homeId(*),away:awayId(*),batter:batterId(*),pitcher:pitcherId(*),game:gameId!inner(*),umpire:umpireId!inner(*),plays&gameId.slug=eq.${slug}`;
        case `/api/games`:
            return `/game?select=id,slug,date,season,home:homeId(*),away:awayId(*),umpire:umpireId(*),homeScore,awayScore,isFinal,isPostponed,initialDate`;
        case `/api/games/${slug}`:
            return `game?select=id,slug,date,season,home:homeId(*),away:awayId(*),umpire:umpireId(*),homeScore,awayScore,isFinal,isPostponed,initialDate&slug=eq.${slug}`;
        case `/api/games/@latest`:
            return `/latest_games?select=id,slug,date,season,home:homeId(*),away:awayId(*),umpire:umpireId(*),homeScore,awayScore,isFinal,isPostponed,initialDate&order=slug.desc`;
        case `/api/players`:
            return `/player?order=lastName.asc&select=id,name,lastName,batSide,pitchHand,positionCode,positionType,height,weight,playerNumber,slug,team:teamId(*)`;
        case `/api/players/${slug}`:
            return `/player?order=lastName.asc&select=id,name,lastName,batSide,pitchHand,positionCode,positionType,height,weight,playerNumber,slug,team:teamId(*)&slug=eq.${slug}`;
        case `/api/players/${slug}/games`:
            return `/atbat?select=game:gameId!inner(*)&order=gameId.asc&or=(batterId.eq.${
                slug!.split('-').slice(-1)[0]
            },pitcherId.eq.${slug!.split('-').slice(-1)[0]})`;
        case `/api/players/${slug}/atbats`:
            return `/atbat?select=id,date,atBatIndex,isTopInning,inning,home:homeId(*),away:awayId(*),batter:batterId(*),pitcher:pitcherId(*),game:gameId!inner(*),umpire:umpireId!inner(*),plays&order=gameId.asc&or=(batterId.eq.${
                slug!.split('-').slice(-1)[0]
            },pitcherId.eq.${slug!.split('-').slice(-1)[0]})`;
        case `/api/teams`:
            return `/team?select=id,name,abbreviation,franchiseName,teamName,imageUrl,league:leagueId(*),division:divisionId(*),venue`;
        case `/api/teams/${id}`:
            return `/team?select=id,name,abbreviation,franchiseName,teamName,imageUrl,league:leagueId(*),division:divisionId(*),venue&id=eq.${id}`;
        case `/api/teams/${id}/games`:
            return `/game?select=id,slug,date,season,home:homeId(*),away:awayId(*),umpire:umpireId(*),homeScore,awayScore,isFinal,isPostponed,initialDate&order=slug.desc&or=(homeId.eq.${id},awayId.eq.${id})`;
        case `/api/teams/${id}/games/latest`:
            return `/latest_games?select=id,slug,date,season,home:homeId(*),away:awayId(*),umpire:umpireId(*),homeScore,awayScore,isFinal,isPostponed,initialDate&order=slug.desc&or=(homeId.eq.${id},awayId.eq.${id})&page=1`;
        case `/api/teams/${id}/atbats`:
            return `/atbat?select=id,date,atBatIndex,isTopInning,inning,home:homeId(*),away:awayId(*),batter:batterId(*),pitcher:pitcherId(*),game:gameId!inner(*),umpire:umpireId!inner(*),plays&order=gameId.asc&or=(homeId.eq.${id},awayId.eq.${id})`;
        case `/api/umpires`:
            return `/umpire?select=*&order=lastName.asc`;
        case `/api/umpires/${id}`:
            return `/umpire?id=eq.${id}`;
        case `/api/umpires/${id}/games`:
            return `/game?select=id,slug,date,season,home:homeId(*),away:awayId(*),umpire:umpireId(*),homeScore,awayScore,isFinal,isPostponed,initialDate&order=slug.desc&umpireId=eq.${id}`;
        case `/api/umpires/${id}/games/latest`:
            return `/latest_games?select=id,slug,date,season,home:homeId(*),away:awayId(*),umpire:umpireId(*),homeScore,awayScore,isFinal,isPostponed,initialDate&order=slug.desc&umpireId=eq.${id}&page=1`;
        case `/api/umpires/${id}/atbats`:
            return `/atbat?select=id,date,atBatIndex,isTopInning,inning,home:homeId(*),away:awayId(*),batter:batterId(*),pitcher:pitcherId(*),game:gameId!inner(*),umpire:umpireId!inner(*),plays&order=gameId.asc&umpireId=eq.${id}`;
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
        if (key === 'lastName') postrestUri += `&${key}=like.${value}*`;
        else postrestUri += `&${key}=eq.${value}`;
    }

    return postrestUri;
};

export const convertAPIUriToPOSTREST = (uri: string): string => {
    const [baseURI, searchParams] = uri.split('?');
    return `${convertBaseAPIUri(baseURI)}${convertSearchParamsToPOSTREST(searchParams)}`;
};
