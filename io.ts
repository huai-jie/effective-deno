import {
  iterateReader,
  readAll,
  readAllSync,
  writeAll,
  writeAllSync,
} from "https://deno.land/std@0.190.0/streams/mod.ts";
import {
  Buffer,
  BufReader,
  BufWriter,
  StringReader,
  StringWriter,
} from "https://deno.land/std@0.190.0/io/mod.ts";
// import { ensureFile } from "https://deno.land/std@0.190.0/fs/ensure_file.ts";

/**
 * A module that provides functions related to IO.
 *
 * readAll: Use readAll from https://deno.land/std/streams/conversion.ts instead.
 * (will be removed after 0.169.0) Import from std/streams/read_all.ts instead.
 *
 * readAllSync: Use readAllSync from https://deno.land/std/streams/conversion.ts instead.
 * (will be removed after 0.169.0) Import from std/streams/read_all_sync.ts instead.
 *
 * writeAll: Use writeAll from https://deno.land/std/streams/conversion.ts instead.
 * (will be removed after 0.169.0) Import from std/streams/write_all.ts instead.
 *
 * writeAllSync: Use writeAll from https://deno.land/std/streams/conversion.ts instead.
 * (will be removed after 0.169.0) Import from std/streams/write_all_sync.ts instead.
 *
 * iter: Use iterateReader from https://deno.land/std/streams/conversion.ts instead.
 * (will be removed after 0.169.0) Import from std/streams/iterate_reader.ts instead.
 *
 * bufio.ts: (will be removed after 0.157.0) Use BufReader from https://deno.land/std/io/buffer.ts instead.
 */
const command = new Deno.Command(Deno.execPath(), {
  args: ["--version"],
  stdout: "piped",
});

const { stdout } = command.outputSync();
console.log(new TextDecoder().decode(stdout));

const decoder = new TextDecoder();
const encoder = new TextEncoder();

/**
 * `Deno.run` is deprecated and scheduled for removal in Deno 2.0
 * Use `Deno.Command` from https://deno.land/api instead
 *
 * const deno = Deno.run({
 *  cmd: [Deno.execPath(), "--version"],
 *  std: "piped",
 * });
 * const output = await readAll(deno.stdout);
 * deno.stdout.close();
 * deno.close();
 * console.log(decoder.decode(ouutput))
 *
 * deno {{ver}}
 * v8 {{ver}}
 * typescript {{ver}}
 */

await writeAll(Deno.stdout, encoder.encode("Hello, Deno!\n\n"));

/**
 * new StringReader("Hello, Deno!")
 *    =>
 * new Buffer(new TextEncoder().encode("Hello, Deno!").buffer)
 */
const f = new StringReader("Hello, Deno!");
const it = iterateReader(f, {
  bufSize: 1,
});
const results = [];
for await (const x of it) {
  results.push(decoder.decode(x));
}
console.log(results);

/**
 * Go's Buffer type [https://pkg.go.dev/bytes#Buffer] instead of Nodes
 */
const buffer = new Buffer();
writeAllSync(buffer, encoder.encode("Hello, "));
writeAllSync(buffer, encoder.encode("World!"));
decoder.decode(readAllSync(buffer));

const bufReaderVar = BufReader.create(Deno.stdin);
const bufReaderRes = await bufReaderVar.readLine();
if (bufReaderRes) console.log(decoder.decode(bufReaderRes.line));

// ensureFile("sample.txt");
const file = await Deno.open("sample.txt", { write: true, create: true });
try {
  const bufWriter = BufWriter.create(file);
  await bufWriter.write(encoder.encode("Hello, World!\n"));
  await bufWriter.write(encoder.encode("Hello, Deno!"));
  /**
   * To transfer of computer data from one temporary storage area to computer permanent memory
   *
   * Is it a must-thing-to-do? Or it is opetional?
   *
   * Answer: It is a must-thing-to-do in order to save the buffer data into the samle.txt file
   */
  await bufWriter.flush();
} finally {
  file.close();
}

console.log(Deno.readTextFileSync("sample.txt"));

/**
 * StringReader & StringWriter are useful when writing unit tests for code that depend on
 */
const strReader = new StringReader("Hello from String Reader");
console.log(decoder.decode(await readAll(strReader))); // => "Hello from String Reader"

const w = new StringWriter();
await writeAll(w, encoder.encode("Hello from String Writer"));
console.log(encoder.encode("Hello from String Writer")); // => "unit8Array"
console.log(w); // => "StringWriter { base: "" }" // What does it mean?
console.log(w.toString()); // => "Hello from String Writer"
