import { AttributeName } from '../enums';
import { Soak } from './Soak';

export interface Passive {
  additionalMovementInMeters?: number;
  immunity?: {
    conditionals?: string[];
    savingThrows?: AttributeName[];
  };
  immunityTypes?: string[];
  initiativeBonus?: number;
  name: string;
  soak?: Soak;
  skills?: {
    [key: string]: number;
  };
  type: string;
}
