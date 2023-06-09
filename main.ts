/**
 * npm registry
 * i.e. https://www.npmjs.com/package/express
 *
 * node package manager (npm)
 * npm:<name>@<version>
 *
 * Target npm package would be download and read
 * from the npm registry on first time.
 * Thereafter cached package will be used.
 *
 * content delivery networks (CDNs)
 * `esm.sh` https://github.com/esm-dev/esm.sh
 *  Support `X-Typescript-Types` header
 */

import chalk from "npm:chalk@5.2.0";
console.info(chalk.green("Hello, World!"));

import express from "https://esm.sh/express@4.18.2";

const app = express();
app.get("/", (_req, res) => {
  res.send("Hello World");
});
app.listen(3000);
