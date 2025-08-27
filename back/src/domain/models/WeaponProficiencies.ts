export interface WeaponProficiencies {
  martialMelee?: {
    finesse1H?: string[];
    normal1H?: string[];
    normal2H?: string[];
    polearms?: string[];
    versatile?: [];
  };

  martialRanged?: {
    '1H'?: string[];
    '2H'?: string[];
  };

  other?: string[];

  simpleMelee?: {
    finesse1H?: string[];
    normal1H?: string[];
    normal2H?: string[];
    versatile?: string[];
  };

  simpledRanged?: {
    '2H': string[];
  }

  thrown?: {
    normal?: string[];
    improvised?: string[];
  };
}