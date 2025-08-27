import { BackgroundName, CharacterCategory, CharacterClassName, CharacterSubclassName } from '../enums';
import { RaceInformation } from './RaceInformation';

export interface BaseCharacter {
  name: string;
  label: string;
  description?: string;
  raceInformation: RaceInformation;
  category: CharacterCategory;
  class: CharacterClassName;
  subclass: CharacterSubclassName;
  level: number;
  background: BackgroundName;
}