export interface Spells {
  slots: {
    knownSpells: {
      cantrips: number;
      others: number;
    };
  };
  progression: {
    [key: string]: number;
  }
}
