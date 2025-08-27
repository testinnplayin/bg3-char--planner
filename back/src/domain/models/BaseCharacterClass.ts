import { ArmorType, AttributeName, CharacterSubclassName, SkillName } from '../enums';
import { Attributes, BonusAttributePoints, SavingThrows } from './Attributes';
import { WeaponProficiencies } from './WeaponProficiencies';

export interface BaseCharacterClass {
  name: string;
  label: string;
  attributes: Attributes;
  bonusAttributePoints: BonusAttributePoints<Attributes>;
  spellcastingAttributes: AttributeName[];
  baseSavingThrows: SavingThrows;
  baseWeaponProficiencies: WeaponProficiencies;
  hps: {
    starting: number;
    perLevel: number;
  };
  armorProficiencies: ArmorType[];
  baseSkillProficiencies: SkillName[];
  startingEquipment: {
    melee?: string[];
    ranged?: string[];
    armor: {
      torso: string[];
      feet: string[];
    }
  };
  // @todo add enum
  progressionType: string;
  abilities: string[];
  subclasses: CharacterSubclassName[];
}
