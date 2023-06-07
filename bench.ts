import { connect } from "./deps.ts";

/**
 * $std/testing/bench.ts: (will be removed after 0.157.0) Use Deno.bench() instead. 
 * See https://doc.deno.land/deno/unstable/~/Deno.bench for details.
 * 
 * terminal:
 * deno bench --allow-net bench.ts
 */

const redis = await connect({hostname: "localhost"});
Deno.bench("ping", async()=>{
  await redis.ping("PING");
})