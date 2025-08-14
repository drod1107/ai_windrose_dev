import { getAllPosts } from "@/lib/mdx";

describe("mdx lib", () => {
  test("getAllPosts returns posts and includes example slug", () => {
    const posts = getAllPosts();
    expect(Array.isArray(posts)).toBe(true);
    expect(posts.length).toBeGreaterThan(0);
    const slugs = posts.map((p) => p.slug);
    expect(slugs).toContain("example");
    // each post should have required fields
    posts.forEach((p) => {
      expect(typeof p.title).toBe("string");
      expect(typeof p.date).toBe("string");
      expect(Array.isArray(p.tags)).toBe(true);
      expect(typeof p.excerpt).toBe("string");
      expect(typeof p.slug).toBe("string");
    });
  });
});
