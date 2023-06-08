// deno-lint-ignore-file require-await
import {
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
  // assertThrows,
} from "./deps.ts";

/**
 * In order to let Deno recognize the import maps,
 * path to the `import_map.json` file is required to specified in the deno run command
 * `deno run -A --importmap import_map.json`
 */
import { assertThrows } from "std/testing/asserts.ts";

/**
 * This module provides various assetion functions primarily for use in testing
 *
 * Un-Comment the "NG" code line to see the error
 *
 * "NG" mean "Not OK" or "Not Good"
 */
const obj = { foo: "bar" };

/**
 * expr => expresssion
 * asssert(expr, msg = "")
 */
assert(true); // => "OK"
// assert(false); // = "NG"

/**
 * assertEquals(actual, expected, msg = "")
 */
assertEquals(1, 1); // => "OK"

/**
 * assertNotEquals(actual, expected, msg = "")
 */
assertNotEquals(1, 2); // => "OK"

/**
 * Throw errors that append the "Testing one two three"
 * i.e "Expected actual: 1 not to be: 1: Testing one two three"
 */
assertEquals([1, { foo: "bar" }], [1, { foo: "bar" }], "assertEquals()"); // => "OK"
// assertNotEquals(1,1, "Testing one two three"); // => "NG"

/**
 * Equivalent to "==="
 * assertStrictEquals(actual, expected, msg = "")
 */
assertStrictEquals(obj, obj); // => "OK"
// assertStrictEquals([1, { foo: "bar" }], [1, { foo: "bar" }],"assertStrictEquals()"); // => "NG"

/**
 * Opposite of assertStrictEquals()
 * assertNotStrictEquals(actual, expected, msg = "")
 */
assertNotStrictEquals([1, { foo: "bar" }], [1, { foo: "bar" }]); // => "OK"
// assertNotStrictEquals(obj, obj, "obj") // => "NG"

/**
 * Throw an exception if "actual" is "undefined" or "null"
 * assertExists(actual, msg = "")
 */
assertExists(false, "assertExists(false)"); // => "OK"
assertExists(0, "assertExists(0)"); // => "OK"
assertExists("", "assertExists('')"); // => "OK"
assertExists({}, "assertExists({})"); // => "OK"
assertExists([], "assertExists([])"); // => "OK"
// assertExists(null, "assertExists(null)"); // => "NG"
// assertExists(undefined, "assertExists(undefined)"); // => "NG"

/**
 * Equivalent to string.includes();
 * assertStringIncludes(actual, expected, msg = "")
 */
assertStringIncludes("foobar", "bar", "assetStringIncludes('foobar')");
// assertStringIncludes("foobaz", "bar", "assetStringIncludes('foobaz')"); // => "NG"

/**
 * assertArrayIncludes(actual: type[], expected : type[], msg = "")
 */
assertArrayIncludes([1, 2], [1], "assertArrayIncludes([1,2])"); // => "OK"
// assertArrayIncludes(["1", 2], [1], "assertArrayIncludes(['1',2])"); // => "NG"

/**
 * assertMatch(actual: string, expected: regexPattern, msg = "")
 *
 * "/^[1-3]/" regex expression which allow only number 1 to 3
 */
assertMatch("1", /^[1-3]$/, "assertMatch('1')"); // => "OK"
// assertMatch("4", /^[1-3]$/, "assertMatch('4')"); // => "NG"
// assertMatch("0", /^[1-3]$/, "assertMatch('0')"); // => "NG"

/**
 * Opposite to assetMatch();
 * assertNotMatch(actual: string, expected: regexPattern, msg = "")
 */
assertNotMatch("4", /^[1-3]$/, "assertNotMatch('4')"); // => "OK"
// assertNotMatch("2", /^[1-3]$/, "assertNotMatch('2')"); // => "NG"

/**
 * Throws an exception if `expected` is not subset of `actual`
 * assertObjectMatch(actual: Object, expected: Object, msg  ="")
 */
assertObjectMatch(
  { obj: { a: 1, b: 2 } },
  { obj: { b: 2 } },
  "assertobjectMatch({obj: {a: 1 , b: 2}})",
); // => "OK"
assertObjectMatch(
  { b: 2 },
  { b: 2 },
  "assertobjectMatch({obj: {b: 2}})",
); // => "OK"
// assertObjectMatch(
//   { obj: { a: 1, b: 3 } },
//   { obj: { b: 2 } },
//   "assertobjectMatch({obj: {a: 1 , b: 3}})",
// ); // => "NG"

/**
 * Execute a function, expecting it to throw. If it does not, then it throws.
 * assertThrows(fn , expertedErrorClass = new (...args: any[]) => E, msgIncludes = "", msg = "")
 */
assertThrows(() => assertEquals(1, 2)); // => "OK"
assertThrows(() => assertEquals(1, 2), AssertionError); // => "OK"
assertThrows(() => assertEquals(1, 2), AssertionError, "Values are not equal"); // => "OK"
// assertThrows(() => assertEquals(1, 2), TypeError) // => "NG";
// assertThrows(
//   (): void => {
//     throw new TypeError("hello world!");
//   },
//   TypeError,
//   "NAH",
//   "assertThrows(hello world!)",
// ); // => "NG"

/**
 * Exceutes a function which return a promise, expecting it to reject.
 * If it does not, then it throws.
 * assertRejects(fn , expertedErrorClass = new (...args: any[]) => E, msgIncludes = "", msg = "")
 */
assertRejects(async () => assertEquals(1, 2)); // => "OK"
// assertRejects(
//   async () => assertEquals(1, 1),
//   AssertionError,
//   "Values are not equal",
//   "assertRejects(1,1)",
// ); // => "NG"
// assertRejects(async () => assertEquals(1, 2), TypeError, "Values are not equals", "assertRejects(TypeError)"); // => "NG"
