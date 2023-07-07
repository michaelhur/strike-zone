export interface Umpire {
    id: number;
    name: string;
    lastName: string;
}

export interface GetUmpireListRequest {
    umpires: Umpire[];
    count: number;
}
