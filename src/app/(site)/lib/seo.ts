// SEO helpers
// Provides title formatting and canonical URL builder.

const SITE_NAME = "Windrose";

// Formats a page title with the site name.
export const formatTitle = (title?: string): string =>
  title ? `${title} | ${SITE_NAME}` : SITE_NAME;

// Builds an absolute canonical URL from a path.
export const canonicalUrl = (path: string): string => {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  return new URL(path, base).toString();
};
