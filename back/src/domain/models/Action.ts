import { RestType } from '../enums';
import { Damage } from './Damage';
import { Heal } from './Heal';

export interface Action {
  name: string;
  restType?: RestType;
  heal?: Heal;
  increasedMovement?: string;
  melee?: Damage;
  ranged?: Damage;
  type: string;
  timesPerTurn: number;
  timesPerCombat?: number;
}

export type BonusAction = Action;
