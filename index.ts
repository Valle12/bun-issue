import { resolve } from "path";

await Bun.build({
  entrypoints: [resolve("test.ts"), "test2.ts"],
  minify: true,
  outdir: "dist",
});
