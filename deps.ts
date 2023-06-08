/**
 * Configure module dependecies with deps.ts
 */
export { DB } from "https://deno.land/x/sqlite@v3.7.2/mod.ts";
export {
  assert,
  assertArrayIncludes,
  assertEquals,
  assertExists,
  AssertionError,
  assertMatch,
  assertNotEquals,
  assertNotMatch,
  assertNotStrictEquals,
  assertObjectMatch,
  assertRejects,
  assertStrictEquals,
  assertStringIncludes,
  assertThrows,
} from "std/testing/asserts.ts";
export { connect } from "https://deno.land/x/redis@v0.29.4/mod.ts";
export {
  basename,
  dirname,
  extname,
  isAbsolute,
  parse,
  posix,
  resolve,
  win32,
} from "std/path/mod.ts";
