import { describe, test } from 'node:test';
import assert from 'node:assert';
import * as fileSystemUtils from './fileSystemUtils';

describe('fileSystemUtils', () => {
  describe('readDataFile', () => {
    test.only('it returns a string from a JSON file', async (t) => {
      const testFilePath = '../../tests/files/test.json';
      const expected = '{\n  "foo": "bar"\n}';
      const result = await fileSystemUtils.readDataFile(testFilePath);
      t.diagnostic(result);
      assert.strictEqual(result, expected);
    });
  });
});