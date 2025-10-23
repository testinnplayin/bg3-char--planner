import { readFile } from 'node:fs/promises';
import path from 'path';

export async function readDataFile(rawFilePath: string): Promise<string> {
  try {
    const filePath = path.resolve(__dirname, rawFilePath);
    return readFile(filePath, { encoding: 'utf-8' });
  } catch (error: unknown) {
    console.error('There has been an error', error);
    throw error;
  }
}