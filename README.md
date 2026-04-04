See https://github.com/AriPerkkio/isolated-tests-jest-node-vitest for isolated test runners.

- Typescript
- Single source file
- Isolation disabled due to limited support (https://github.com/oven-sh/bun/issues/6024)
- Performance difference likely comes from lack of parallelism features (https://github.com/oven-sh/bun/issues/22817)

Run with:

```sh
$ node generate.mjs
$ pnpm install
$ time pnpm run vitest
$ time pnpm run bun
```

| Test runner | Time     | Runtime version |
| ----------- | -------- | --------------- |
| `bun:test`  | 144.424s | Bun `v1.3.9`    |
| `vitest`    | 5.155s   | Node `v22.22.0` |
