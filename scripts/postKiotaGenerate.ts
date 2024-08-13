// DenoでdMMClient.tsの文字列を読み込んで、import文の.js拡張子を.ts拡張子に書き換える。
const dMMClient = await Deno.readTextFile("client/dMMClient.ts");
const replaced = dMMClient.replace(/\.js/g, ".ts");
await Deno.writeTextFile("client/dMMClient.ts", replaced);

console.log("Done replaced .js to .ts in dMMClient.ts");
