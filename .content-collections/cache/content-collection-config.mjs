// content-collections.ts
import { defineCollection, defineConfig } from "@content-collections/core";
var posts = defineCollection({
  name: "posts",
  directory: "src/posts",
  include: "**/*.{mdx,md}",
  schema: (z) => ({
    title: z.string(),
    summary: z.string()
    // read: z.boolean(),
  })
});
var content_collections_default = defineConfig({
  collections: [posts]
});
export {
  content_collections_default as default
};
