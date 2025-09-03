import { Soak } from './Soak';

export interface Reaction {
  additionalDamage?: boolean;
  label: string;
  name: string;
  soak?: Soak;
  timesPerTurn?: number;
  type: string;
}

