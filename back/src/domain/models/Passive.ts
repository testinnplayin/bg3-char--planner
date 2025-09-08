import { AttributeName } from '../enums';
import { Soak } from './Soak';

export interface Passive {
  acBonus: {
    mod: AttributeName;
  };
  additionalMovementInMeters?: number;
  conditionals: string[];
  immunity?: {
    conditionals?: string[];
    savingThrows?: AttributeName[];
  };
  immunityTypes?: string[];
  initiativeBonus?: number;
  name: string;
  skills?: {
    [key: string]: number;
  };
  soak?: Soak;
  type: string;
}
