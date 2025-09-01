import { Soak } from './Soak';

export interface Reaction {
  name: string;
  soak?: Soak;
  type: string;
}

