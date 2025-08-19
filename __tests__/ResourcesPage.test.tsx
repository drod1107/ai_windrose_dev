import { render, screen } from "@testing-library/react";
import ResourcesPage from "@/app/resources/page";

describe("ResourcesPage", () => {
  it("displays resource cards with download links", () => {
    render(<ResourcesPage />);
    const resources = [
      {
        title: "Home AI Safety Checklist",
        href: "/resources/home-ai-safety-checklist",
      },
      {
        title: "School Readiness Matrix",
        href: "/resources/school-readiness-matrix",
      }
    ];
    resources.forEach((r) => {
      expect(
        screen.getByRole("heading", { name: r.title }),
      ).toBeInTheDocument();
      const link = screen.getByRole("link", { name: `Download ${r.title}` });
      expect(link).toHaveAttribute("href", r.href);
    });
  });
});
