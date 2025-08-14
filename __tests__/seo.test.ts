import { canonicalUrl, formatTitle } from "../src/app/(site)/lib/seo";

describe("seo helpers", () => {
  it("builds canonical url", () => {
    process.env.NEXT_PUBLIC_SITE_URL = "https://example.com";
    expect(canonicalUrl("/test")).toBe("https://example.com/test");
  });

  it("formats title", () => {
    expect(formatTitle("Page")).toBe("Page | Windrose");
    expect(formatTitle()).toBe("Windrose");
  });
});
