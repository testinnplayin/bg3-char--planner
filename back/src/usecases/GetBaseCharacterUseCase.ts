import { BaseCharacter } from '../domain/models';
import { UseCase } from './UseCase';
import * as fileSystemUtils from '../files/fileSystemUtils';

export interface GetBaseCharacterRequest {
  characterLabel: string;
}

export type GetBaseCharacterResponse = Promise<BaseCharacter>

export class GetBaseCharacterUseCase implements UseCase<GetBaseCharacterRequest, GetBaseCharacterResponse> {
  private origins: string[] = [
    'ASTARION_BASE',
    'GALE_BASE',
    'KARLACH_BASE',
    'LAEZEL_BASE',
    'SHADOW_HEART_BASE',
    'WYLL_BASE'
  ];
  async execute(request: GetBaseCharacterRequest): GetBaseCharacterResponse {
    const filePath = this.buildFilePath(request.characterLabel);
    const rawJson = await fileSystemUtils.readDataFile(filePath);
    return JSON.parse(rawJson) as BaseCharacter;
  }

  private buildFilePath(characterLabel: string) {
    if (this.origins.includes(characterLabel)) {
      return `data/characters/origins/${characterLabel}.json`;
    }
    return 'data/characters/CUSTOM.json';
  }
}
