import  { defineCollection, defineConfig } from "@content-collections/core"

const posts = defineCollection({
  name: "posts",
  directory: "src/posts",
  include: "**/*.{mdx,md}",
  schema: (z) => ({
    title: z.string(),
    summary: z.string(),
    // read: z.boolean(),
  })
});

export default defineConfig({
  collections: [posts],
});