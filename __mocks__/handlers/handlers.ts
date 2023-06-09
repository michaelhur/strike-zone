import { atBatHandler } from './atBatHandler';
import { gameHandler } from './gameHandler';
import { playerHandler } from './playerHandler';
import { teamHandler } from './teamHandler';
import { umpireHandler } from './umpireHandler';

export const handlers = [...atBatHandler, ...gameHandler, ...playerHandler, ...teamHandler, ...umpireHandler];
