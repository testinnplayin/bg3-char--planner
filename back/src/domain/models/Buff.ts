import { AttributeName, WeaponTypeDamage } from '../enums';
import { Damage } from './Damage';

export interface Buff {
  acBonus?: {
    mod: AttributeName;
  };
  conditionals?: string[];
  damage?: Damage;
  name: string;
  resistanceTypes?: WeaponTypeDamage;
  type: string;
}
