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
  // try filename match first
  let base = slug;
  let filePath = path.join(postsDir, `${base}.mdx`);

  if (!fs.existsSync(filePath)) {
    // fallback: find a file whose front matter slug matches
    const candidates = fs.readdirSync(postsDir).filter(f => f.endsWith(".mdx"));
    const match = candidates.find((fname) => {
      const full = path.join(postsDir, fname);
      const { data } = matter.read(full);
      const fm = data as Partial<PostMeta>;
      const filenameSlug = fname.replace(/\.mdx$/, "");
      return (fm.slug || filenameSlug) === slug;
    });

    if (!match) {
      throw new Error("not found");
    }
    base = match.replace(/\.mdx$/, "");
    filePath = path.join(postsDir, match);
  }

  const { data } = matter.read(filePath);
  const { default: Content } = await import(`../../content/blog/${base}.mdx`);
  const { mtime } = fs.statSync(filePath);
  const fm = data as Partial<PostMeta>;

  return {
    meta: {
      title: fm.title || base,
      date: fm.date || new Date(0).toISOString(),
      tags: fm.tags || [],
      excerpt: fm.excerpt || "",
      slug: fm.slug || base,
    },
    Content,
    lastUpdated: mtime.toISOString(),
  };
}
