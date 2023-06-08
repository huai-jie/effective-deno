import { assertStrictEquals } from "./deps.ts";

Deno.test("This test case will fail without --alow-write --allow-read flags", async () => {
  await Deno.writeTextFile("./sample.txt", "Hello, World!");
  const actual = await Deno.readTextFile("./sample.txt");
  const expected = "Hello, World!";
  assertStrictEquals(actual, expected);
});

async function processFile(path: string) {
  const _file = await Deno.open(path);
  // always close the file after open to prevent resources leakage
  // _file.close();
}

/**
 * If cant find the causes of resorces leakage problem,
 * Not Ideal
 * Set the sanitizeOps or sanitizeResources to false
 */

Deno.test({
  name: "processFile",
  async fn() {
    await processFile("./sample.txt");
  },
  sanitizeResources: false,
});
