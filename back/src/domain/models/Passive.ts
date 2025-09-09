import { AttributeName, WeaponTypeDamage } from '../enums';
import { Damage } from './Damage';
import { Soak } from './Soak';

export interface Passive {
  acBonus?: {
    mod: AttributeName;
  };
  additionalMovementInMeters?: number;
  conditionals: string[];
  damage?: Damage
  immunity?: {
    conditionals?: string[];
    savingThrows?: AttributeName[];
  };
  immunityTypes?: string[];
  initiativeBonus?: number;
  label: string;
  name: string;
  resistanceTypes?: WeaponTypeDamage;
  skills?: {
    [key: string]: number;
  };
  soak?: Soak;
  toHit?: number;
  toBeHit?: number;
  type: string;
}
