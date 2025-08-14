import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface PostMeta {
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  slug: string;
}

const postsDir = path.join(process.cwd(), "content", "blog");

export function getPostSlugs(): string[] {
  return fs
    .readdirSync(postsDir)
    .filter((p) => p.endsWith(".mdx"))
    .map((p) => p.replace(/\.mdx$/, ""));
}

export function getAllPosts(): PostMeta[] {
  return getPostSlugs()
    .map((slug) => {
      const filePath = path.join(postsDir, `${slug}.mdx`);
      const { data } = matter.read(filePath);
      const fm = data as Partial<PostMeta>;
      return {
        title: fm.title || slug,
        date: fm.date || new Date(0).toISOString(),
        tags: fm.tags || [],
        excerpt: fm.excerpt || "",
        slug: fm.slug || slug,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string) {
  const filePath = path.join(postsDir, `${slug}.mdx`);
  const { data } = matter.read(filePath);
  const { default: Content } = await import(`../../content/blog/${slug}.mdx`);
  const { mtime } = fs.statSync(filePath);
  const fm = data as Partial<PostMeta>;
  return {
    meta: {
      title: fm.title || slug,
      date: fm.date || new Date(0).toISOString(),
      tags: fm.tags || [],
      excerpt: fm.excerpt || "",
      slug: fm.slug || slug,
    },
    Content,
    lastUpdated: mtime.toISOString(),
  };
}
