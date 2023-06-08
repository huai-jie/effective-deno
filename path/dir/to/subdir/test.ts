import { assert } from "../../../../deps.ts";

/**
 * `deno test`
 *
 * Match case; Match Whole Word; // => when refer to 'test'
 *
 * deno test command would detect following file format:
 *
 * test.ts
 * test.tsx
 * test.js
 * test.mjs
 * test.jsx
 *
 * _test.ts
 * _test.tsx
 * _test.js
 * _test.mjs
 * _test.jsx
 *
 * .test.ts
 * .test.tsx
 * .test.js
 * .test.mjs
 * .test.jsx
 *
 * specify permission
 * `deno test --allow-read --allow-write`
 *
 * specify file
 * `deno test ./path/dir/to/subdir/test.ts`
 * multiple files
 * `deno test ./path/dir/to/subdir/test.ts ./sum_test.ts`
 *
 * specific name
 * `deno test- filter ${regex}`
 * i.e `deno test --filter specific`
 */

Deno.test("specific path file", () => {
  assert(true);
});
