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
    PLAYER_DETAIL: '/players/:id',
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
    PLAYER_DETAIL(id: number): string {
        return `/players/${id}`;
    },
    TEAM_DETAIL(id: number): string {
        return `/teams/${id}`;
    },
    UMPIRE_DETAIL(id: number): string {
        return `/umpires/${id}`;
    },
};
