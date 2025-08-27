import { BaseCharacter } from './BaseCharacter';

export type OriginCharacter = BaseCharacter & {
  other?: Record<string, unknown>;
}
