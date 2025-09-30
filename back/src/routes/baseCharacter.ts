import { Request, Response, Router } from 'express';

const baseCharacterRouter = Router();

baseCharacterRouter.get('/baseCharacter/:characterLabel', async (req: Request, res: Response) => {
  const characterLabel = req.params;

  res.status(200);
});

export { baseCharacterRouter };

