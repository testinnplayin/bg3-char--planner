import { AttributeName, DurationType, RestType } from '../enums';
import { Damage } from './Damage';
import { Debuff } from './Debuff';
import { Heal } from './Heal';

export interface Action {
  additionalDamange?: boolean;
  conditionals: string[];
  debuffToOthers: Debuff;
  duration?: DurationType;
  durationInTurns?: number;
  heal?: Heal;
  increasedMovement?: string;
  label: string;
  linkedActions?: string[];
  melee?: Damage;
  name: string;
  numberOfTargets?: number;
  ranged?: Damage;
  rangeInMeters?: number;
  resistanceTypes?: string[];
  restType?: RestType;
  savingThrows?: AttributeName[];
  savingThrowBonus?: string;
  statusEffect?: string;
  target?: string;
  timesPerTurn: number;
  timesPerCombat?: number;
  toBeHit?: string;
  toHit?: string;
  type: string;
}

export type BonusAction = Action;
