export const PATH = {
    HOME: '/',
    LOGIN: '/login',
    SIGNUP: '/signup',
    BOOKMARK: '/bookmarks',
    GAME_LIST: '/games',
    GAME_DETAIL: '/games/:slug',
    FIXTURE: '/fixtures',
    FIXTURE_BY_DATE: '/fixtures/:date',
    PLAYER_LIST: '/players',
    PLAYER_DETAIL: '/players/:slug',
    TEAM_LIST: '/teams',
    TEAM_DETAIL: '/teams/:id',
    UMPIRE_LIST: '/umpires',
    UMPIRE_DETAIL: '/umpires/:id',
    ERROR: '/error',
    NOT_FOUND: '/*',
};

export const DYNAMIC_PATH = {
    GAME_DETAIL(slug: string): string {
        return `/games/${slug}`;
    },
    FIXTURE_BY_DATE(date: string): string {
        return `/fixtures/${date}`;
    },
    PLAYER_DETAIL(slug: string): string {
        return `/players/${slug}`;
    },
    TEAM_DETAIL(id: number): string {
        return `/teams/${id}`;
    },
    UMPIRE_DETAIL(id: number): string {
        return `/umpires/${id}`;
    },
};

export const DYNAMIC_API_PATH = {
    ATBAT_LIST(): string {
        return `/atbat?select=id,date,atBatIndex,isTopInning,inning,home:homeId(*),away:awayId(*),batter:batterId(*),pitcher:pitcherId(*),game:gameId!inner(*),umpire:umpireId!inner(*),plays`;
    },
    ATBAT_DETAIL(slug: string): string {
        return `/atbat?select=id,date,atBatIndex,isTopInning,inning,home:homeId(*),away:awayId(*),batter:batterId(*),pitcher:pitcherId(*),game:gameId!inner(*),umpire:umpireId!inner(*),plays&gameId.slug=eq.${slug}`;
    },
    GAME_LIST(fixtureDate: string): string {
        return `/game?select=id,slug,date,season,home:homeId(*),away:awayId(*),umpire:umpireId(*),homeScore,awayScore,isFinal,isPostponed,initialDate&date=eq.${fixtureDate}`;
    },
    GAME_DETAIL(slug: string): string {
        return `game?select=id,slug,date,season,home:homeId(*),away:awayId(*),umpire:umpireId(*),homeScore,awayScore,isFinal,isPostponed,initialDate&slug=eq.${slug}`;
    },
    GAME_LATEST(): string {
        return `/latest_games?select=id,slug,date,season,home:homeId(*),away:awayId(*),umpire:umpireId(*),homeScore,awayScore,isFinal,isPostponed,initialDate&order=slug.desc`;
    },
    PLAYER_LIST(lastName?: string): string {
        const basePath = `/player?order=lastName.asc&select=id,name,lastName,batSide,pitchHand,positionCode,positionType,height,weight,playerNumber,slug,team:teamId(*)`;
        return lastName ? `${basePath}&lastName=like.${lastName}*` : basePath;
    },
    PLAYER_DETAIL(slug: string): string {
        return `/player?order=lastName.asc&select=id,name,lastName,batSide,pitchHand,positionCode,positionType,height,weight,playerNumber,slug,team:teamId(*)&slug=eq.${slug}`;
    },
    PLAYER_GAME_LIST(slug: string): string {
        const [id] = slug.split('-').slice(-1);
        return `/atbat?select=game:gameId!inner(*)&order=gameId.asc&or=(batterId.eq.${id},pitcherId.eq.${id})`;
    },
    PLAYER_ATBAT_LIST(slug: string): string {
        const [id] = slug.split('-').slice(-1);
        return `/atbat?select=id,date,atBatIndex,isTopInning,inning,home:homeId(*),away:awayId(*),batter:batterId(*),pitcher:pitcherId(*),game:gameId!inner(*),umpire:umpireId!inner(*),plays&order=gameId.asc&or=(batterId.eq.${id},pitcherId.eq.${id})`;
    },
    TEAM_LIST(): string {
        return `/team?select=id,name,abbreviation,franchiseName,teamName,imageUrl,league:leagueId(*),division:divisionId(*),venue`;
    },
    TEAM_DETAIL(id: number): string {
        return `/team?select=id,name,abbreviation,franchiseName,teamName,imageUrl,league:leagueId(*),division:divisionId(*),venue&id=eq.${id}`;
    },
    TEAM_GAME_LIST(id: number): string {
        return `/game?select=id,slug,date,season,home:homeId(*),away:awayId(*),umpire:umpireId(*),homeScore,awayScore,isFinal,isPostponed,initialDate&order=slug.desc&or=(homeId.eq.${id},awayId.eq.${id})`;
    },
    TEAM_ATBAT_LIST(id: number): string {
        return `/atbat?select=id,date,atBatIndex,isTopInning,inning,home:homeId(*),away:awayId(*),batter:batterId(*),pitcher:pitcherId(*),game:gameId!inner(*),umpire:umpireId!inner(*),plays&order=gameId.asc&or=(homeId.eq.${id},awayId.eq.${id})`;
    },
    TEAM_ROSTER(id: number): string {
        return `/player?order=lastName.asc&select=id,name,lastName,batSide,pitchHand,positionCode,positionType,height,weight,playerNumber,slug,team:teamId(*)&teamId=eq.${id}`;
    },
    UMPIRE_LIST(lastName?: string): string {
        const basePath = `/umpire?select=*&order=lastName.asc`;
        return lastName ? `${basePath}&lastName=like.${lastName}*` : basePath;
    },
    UMPIRE_DETAIL(id: number): string {
        return `/umpire?id=eq.${id}`;
    },
    UMPIRE_GAME_LIST(id: number): string {
        return `/game?select=id,slug,date,season,home:homeId(*),away:awayId(*),umpire:umpireId(*),homeScore,awayScore,isFinal,isPostponed,initialDate&order=slug.desc&umpireId=eq.${id}`;
    },
    UMPIRE_ATBAT_LIST(id: number): string {
        return `/atbat?select=id,date,atBatIndex,isTopInning,inning,home:homeId(*),away:awayId(*),batter:batterId(*),pitcher:pitcherId(*),game:gameId!inner(*),umpire:umpireId!inner(*),plays&order=gameId.asc&umpireId=eq.${id}`;
    },
};
