import { assertEquals } from "./deps.ts";
import { sum } from "./sum.ts";

Deno.test("sum() adds all the given numbers", () => {
  const actual = sum(1, 2);
  const expected = 3;
  assertEquals(actual, expected);
});
Deno.test("sum() return 0 when no arguments given", () => {
  const actual = sum();
  const expected = 0;
  assertEquals(actual, expected);
});
