import { atBatHandler } from './atBatHandler';
import { divisionHandler } from './divisionHandler';
import { gameHandler } from './gameHandler';
import { leagueHandler } from './leagueHandler';
import { playerHandler } from './playerHandler';
import { teamHandler } from './teamHandler';
import { umpireHandler } from './umpireHandler';

export const handlers = [
    ...atBatHandler,
    ...gameHandler,
    ...playerHandler,
    ...teamHandler,
    ...umpireHandler,
    ...leagueHandler,
    divisionHandler,
];
