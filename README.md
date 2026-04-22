See https://github.com/AriPerkkio/isolated-tests-jest-node-vitest for isolated test runners.

- Typescript
- Single source file
- Isolation disabled due to limited support (https://github.com/oven-sh/bun/issues/6024)
- Performance difference likely comes from lack of parallelism features (https://github.com/oven-sh/bun/issues/22817)

> [!NOTE]
> After couple of years Bun implemented `--parallel` and became 1.03x-1.06x faster than Vitest.
> Updated benchmarks to use this new flag.

Run with:

```sh
$ node generate.mjs
$ pnpm install
$ time pnpm run vitest
$ time pnpm run bun
# Change generate.mjs TEST_FILE_COUNT to 10k and re-run
```

| Test runner                      | Test count | Time       | Runtime version |
| -------------------------------- | ---------- | ---------- | --------------- |
| `bun:test`                       | 1_000      | 144.424s   | Bun `v1.3.12`   |
| `bun:test` with new `--parallel` | 1_000      | 3.610s     | Bun `v1.3.13`   |
| `vitest`                         | 1_000      | 3.816s     | Node `v22.22.0` |
| `bun:test`                       | 10_000     | 17m14.942s | Bun `v1.3.12`   |
| `bun:test` with new `--parallel` | 10_000     | 32.517s    | Bun `v1.3.13`   |
| `vitest`                         | 10_000     | 33.423s    | Node `v22.22.0` |
