// Kiota generate code modification

const dMMClient = await Deno.readTextFile("client/dMMClient.ts");

const replaced = dMMClient
  // replace .js to .ts
  .replace(/\.js/g, ".ts")
  // append return type
  .replace(/(function createDMMClient.*\)) \{/g, "$1: DMMClient {");
// add return
await Deno.writeTextFile("client/dMMClient.ts", replaced);

console.log("Done replaced .js to .ts in dMMClient.ts");
