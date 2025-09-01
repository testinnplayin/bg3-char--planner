import { Soak } from './Soak';

export interface Passive {
  name: string;
  soak?: Soak;
  skills?: {
    [key: string]: number;
  };
  type: string;
}
