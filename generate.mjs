import { mkdirSync, rmSync, writeFileSync } from "node:fs";

const TEST_FILE_COUNT = 1_000;

const TEMPLATE = `\
import { sum } from '../src/sum.ts';

test('fixture', async () => {
  expect(await sum(123, 321)).toBe(444);
})
`;

for (const directory of ["bun", "vitest"]) {
  rmSync(directory, { recursive: true, force: true });
  mkdirSync(directory);
}

for (const _index of Array.from({ length: TEST_FILE_COUNT }).fill().keys()) {
  const index = 1 + _index;

  writeFileSync(`./vitest/example-${index}.test.ts`, vitestTemplate(), "utf-8");
  writeFileSync(`./bun/example-${index}.test.ts`, bunTemplate(), "utf-8");
}

function vitestTemplate() {
  return `\
// Generated
import { expect, test } from 'vitest'
${TEMPLATE}
`;
}

function bunTemplate() {
  return `\
// Generated
import { expect, test } from "bun:test";
${TEMPLATE}
`;
}
