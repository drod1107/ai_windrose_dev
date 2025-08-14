import { NextResponse } from "next/server";
import RSS from "rss";
import { getAllPosts } from "@/lib/mdx";

export async function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const feed = new RSS({
    title: "AI Safety Blog",
    site_url: siteUrl,
    feed_url: `${siteUrl}/rss.xml`,
  });

  getAllPosts().forEach((post) => {
    feed.item({
      title: post.title,
      url: `${siteUrl}/blog/${post.slug}`,
      date: post.date,
      description: post.excerpt,
      categories: post.tags,
    });
  });

  return new NextResponse(feed.xml({ indent: true }), {
    headers: { "Content-Type": "application/rss+xml" },
  });
}
