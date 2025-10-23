import { Request, Response, Router } from 'express';
import { GetBaseCharacterUseCase } from '../usecases/GetBaseCharacterUseCase';

const baseCharacterRouter = Router();

const getBaseCharacterUseCase = new GetBaseCharacterUseCase();

baseCharacterRouter.get('/baseCharacter/:characterLabel', async (req: Request, res: Response) => {
  const characterLabel = req.params.characterLabel;
  const placeholder = getBaseCharacterUseCase.execute({ characterLabel });
  res.status(200);
  return placeholder;
});

export { baseCharacterRouter };

