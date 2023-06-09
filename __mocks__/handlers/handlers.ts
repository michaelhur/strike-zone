import { atBatHandler } from './atBatHandler';
import { gameHandler } from './gameHandler';
import { playerHandler } from './playerHandler';

export const handlers = [...atBatHandler, ...gameHandler, ...playerHandler];
