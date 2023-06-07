import {
  basename,
  dirname,
  extname,
  isAbsolute,
  parse,
  posix,
  resolve,
  win32,
} from "./deps.ts";

/**
 * This module provide functions for manipulating file paths.
 *
 * The style of the file path differs from OS to OS.
 *
 * For example, Windows uses "\" as a path separator , whereas Unix systems use "/" .
 *
 * With these differences in mind, mod.ts provides behavior depending on the OS you're using.
 *
 * If you expect the same behavior in the Windows environment as in the Unix environment,
 * you should import posix.tsmod.ts instead of or use the functions provided in the namespace.posix
 */
console.log(posix.join("dist", "index.html")); // => "dist/index.html"
console.log(win32.join("dist", "index.html")); // => "dist\index.html"
console.log(extname("public/index.html")); // => ".html"
console.log(basename("src/protocol/mod.ts")); // => "mod.ts"
console.log(dirname("src/protocol/mod.ts")); // => "src/protocol"
console.log(isAbsolute("/src/protocol/mod.ts")); // => "true"
console.log(isAbsolute("src/protocol/mod.ts")); // => "false"
console.log(isAbsolute("mod.ts")); // => "false"
console.log(parse("src/protocol/mod.ts")); // => "false"
// convert to absoulte path format
console.log(resolve("src/protocol/mod.ts")); // => "x:\...\effective-deno\src\protocol\mod.ts"
