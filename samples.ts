import { DB } from "https://deno.land/x/sqlite@v3.7.2/mod.ts";

/**
 * Open a Database 
 * 
 * When the ":memory:" keyword is used in the context of an SQLite database connection string, 
 * it instructs SQLite to create a temporary, 
 * in-memory database rather than storing the database on disk.
 */
const db = new DB(":memory:");
db.query("CREATE TABLE users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, age INTEGER)");
db.query("INSERT INTO users (name, age) VALUES (?, ?)", ["hoge", 20]);
db.query("INSERT INTO users (name, age) VALUES (?, ?)", ["piyo", 30]);
for (const [name, age] of db.query("SELECT name, age FROM users")) {
  console.log({ name, age });
}
db.close();
