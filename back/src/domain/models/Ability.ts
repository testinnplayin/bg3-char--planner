import { RestType } from '../enums';
import { Damage } from './Damage';
import { Spells } from './Spell';

export interface Ability {
  charges?: number;
  conditionals?: string[];
  damage?: Damage;
  durationInTurns?: number;
  fightingStyles?: string[];
  label?: string;
  name: string;
  numberOfActions?: string;
  numberOfTypes?: number;
  spells?: Spells;
  skills?: Record<string, number>;
  restType?: RestType;
  timesPerCombat?: number;
  type: string;
}

