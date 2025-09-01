import { RestType } from '../enums';

export interface Soak {
  conditionals?: string[];
  reduction?: string;
  savingThrows?: string[];
  ko: string;
  ok: string;
  restType?: RestType;
  timesPerTurn: number;
  timesPerCombat?: number;
}

