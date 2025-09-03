import { RestType } from '../enums';
import { Damage } from './Damage';

export interface Ability {
  charges?: number;
  conditionals?: string[];
  damage?: Damage;
  durationInTurns?: number;
  fightingStyles?: string[];
  name: string;
  numberOfActions?: string;
  numberOfTypes?: number;
  restType?: RestType;
  timesPerCombat?: number;
  type: string;
}

