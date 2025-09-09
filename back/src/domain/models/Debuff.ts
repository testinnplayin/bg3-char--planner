import { AttributeName, DurationType, TargetType } from '../enums';

export interface Debuff {
  duration: DurationType;
  numberOfTargets: number;
  savingThrows: AttributeName[];
  savingThrowDebuff?: {
    debuff?: number;
    numberOfDice?: number;
    dieType?: number;
  };
  target: TargetType;
  toHit ?: number;
}
