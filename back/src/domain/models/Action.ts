import { AttributeName, RestType } from '../enums';
import { Damage } from './Damage';
import { Heal } from './Heal';

export interface Action {
  additionalDamange?: boolean;
  heal?: Heal;
  increasedMovement?: string;
  label: string;
  linkedActions?: string[];
  melee?: Damage;
  name: string;
  ranged?: Damage;
  rangeInMeters?: number;
  restType?: RestType;
  savingThrows?: AttributeName[];
  statusEffect?: string;
  timesPerTurn: number;
  timesPerCombat?: number;
  toBeHit?: string;
  toHit?: string;
  type: string;
}

export type BonusAction = Action;
