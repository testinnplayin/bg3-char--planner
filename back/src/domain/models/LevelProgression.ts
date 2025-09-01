import { Ability } from './Ability';
import { Action, BonusAction } from './Action';
import { Passive } from './Passive';
import { Reaction } from './Reaction';

export interface LevelProgressionInformation {
  actions?: Action[];
  abilities?: Ability[];
  bonusActions?: BonusAction[];
  chooseFeat?: boolean;
  chooseSubclass?: boolean;
  hps: number;
  passives?: Passive[];
  profiencyBonus: number;
  reactions?: Reaction[];
}

export interface LevelProgression {
  [key: string]: LevelProgressionInformation;
}