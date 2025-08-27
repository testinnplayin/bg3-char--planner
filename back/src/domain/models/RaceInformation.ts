import { RaceName, SubRaceName } from '../enums';

export interface RaceInformation {
  race: RaceName;
  label: string;
  subRace?: SubRaceName;
}