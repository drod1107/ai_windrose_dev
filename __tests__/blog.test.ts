import { getAllPosts } from "@/lib/mdx";

describe("blog mdx", () => {
  it("loads all posts", () => {
    const posts = getAllPosts();
    expect(posts.length).toBeGreaterThan(0);
    expect(posts[0]).toHaveProperty("title");
    expect(posts[0]).toHaveProperty("slug");
  });
});
