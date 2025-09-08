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
  resistanceTypes?: string[];
  restType?: RestType;
  savingThrows?: AttributeName[];
  savingThrowBonus?: AttributeName[];
  statusEffect?: string;
  timesPerTurn: number;
  timesPerCombat?: number;
  toBeHit?: string;
  toHit?: string;
  type: string;
}

export type BonusAction = Action;
