import {
  emptyDir,
  ensureDir,
  ensureFile,
  exists,
  expandGlob,
  move,
  walk,
} from "https://deno.land/std@0.190.0/fs/mod.ts";

/**
 * This module provide functionality related to filesystem.
 */

console.log(await exists("./text.html")); // => "false"
console.log(await exists("./fs.ts")); // => "true"
/**
 * Ensures that the directory exists.
 * If the directory does not exist, it is created.
 * Equivalent to "mkdir -p" command
 */
await ensureDir("./path/dir/to/subdir");
/**
 * Empty the specified directory.
 * If the specified directory does not exist, it will be created.
 */
await emptyDir("./path/dir/to/subdir");
await ensureFile("./path/dir/to/file.ts");
await move("./path/dir/to/file.ts", "./subdir/file.ts");
await move("./subdir/file.ts", "./subdir/run.ts", { overwrite: true });
/**
 * walk => Recursively scan the contents of the specified directory.
 */
for await (const entry of walk("./path")) {
  // Would show basename if there is file i.e => "mod.ts"
  console.log(entry.name); // => "path", "dir" , "to", "subdir"
}
/**
 * globstar  => **
 * Allowing on its own as a name component to recursively match any number of layers of non-hidden directories
 *
 * expandGlob => scan files mathcing the given glob pattern
 */
for await (const entry of expandGlob("./subdir/**/*.ts")) {
  console.log(entry.name); // => "run.ts", "mod.ts"
}
