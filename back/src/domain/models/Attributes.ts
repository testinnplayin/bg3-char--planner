export interface Attributes {
  charisma: number;
  constitution: number;
  dexterity: number;
  intelligence: number;
  strength: number;
  wisdom: number;
}

export type BonusAttributePoints<T> = {
  [Property in keyof T]?: number;
};

export type SavingThrows = BonusAttributePoints<Attributes>;