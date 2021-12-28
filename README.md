# Vitest Discussion #331

Reproduction for issue discussed in vitest's repository.

> https://github.com/vitest-dev/vitest/discussions/331

### Output

```log
➜  vitest-discussion-331 npm run test

> vitest-discussion-331@0.0.1 test
> vitest


 RUN  vitest-discussion-331

(node:18949) [DEP0148] DeprecationWarning: Use of deprecated folder mapping "./" in the "exports" field module resolution of the package at /vitest-discussion-331/node_modules/chai/package.json.
Update this package.json to use a subpath pattern like "./*".
(Use `node --trace-deprecation ...` to show where the warning was created)
 ↓ test/Foo.test.ts (0) [skipped]

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Failed Suites 1 ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

 FAIL  test/Foo.test.ts [ test/Foo.test.ts ]
Error: Failed to resolve import "$foo/bar" from "src/components/Index.svelte". Does the file exist?
 ❯ formatError node_modules/vite/dist/node/chunks/dep-4a9cff06.js:42631:46
 ❯ TransformContext.error node_modules/vite/dist/node/chunks/dep-4a9cff06.js:42627:19
 ❯ normalizeUrl node_modules/vite/dist/node/chunks/dep-4a9cff06.js:81376:26
 ❯ processTicksAndRejections node:internal/process/task_queues:96:5
 ❯ async TransformContext.transform node_modules/vite/dist/node/chunks/dep-4a9cff06.js:81516:57
 ❯ async Object.transform node_modules/vite/dist/node/chunks/dep-4a9cff06.js:42847:30
 ❯ async doTransform node_modules/vite/dist/node/chunks/dep-4a9cff06.js:57929:29

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯

Test Files  1 failed | 1 skipped (1)
     Tests  no tests
      Time  1.50s (in thread 0ms, Infinity%)
```

### Reproduction

1. Run `npm install`

2. Run `npm run test`

### Discussion Link

- https://github.com/vitest-dev/vitest/discussions/331
