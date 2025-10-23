import express, { NextFunction, Request, Response } from 'express';
import { baseCharacterRouter } from './routes/baseCharacter';

const app = express();


app.disable('x-powered-by');

app.use(baseCharacterRouter);

// @todo replace with actual error handler
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: unknown, req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof Error) {
    console.log(err.stack);
  }
  res.status(500).send({ message: 'Something went wrong' });
});

export default app;
