import { RestType } from '../enums';

export interface Ability {
  conditionals?: string[];
  durationInTurns?: number;
  fightingStyles?: string[];
  name: string;
  numberOfActions: string;
  restType?: RestType;
  timesPerCombat?: number;
  type: string;
}

