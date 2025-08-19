import { render, screen } from "@testing-library/react";
import HomeChecklistPage from "@/app/resources/home-ai-safety-checklist/page";
import SchoolMatrixPage from "@/app/resources/school-readiness-matrix/page";

describe("Resource detail pages", () => {
  const cases = [
    {
      Component: HomeChecklistPage,
      title: "Home AI Safety Checklist",
      pdf: "/resources/home-ai-safety-checklist.pdf",
    },
    {
      Component: SchoolMatrixPage,
      title: "School Readiness Matrix",
      pdf: "/resources/school-readiness-matrix.pdf",
    },
  ];
  cases.forEach(({ Component, title, pdf }) => {
    it(`renders ${title} page with download link`, () => {
      render(<Component />);
      expect(screen.getByRole("heading", { name: title })).toBeInTheDocument();
      const link = screen.getByRole("link", { name: `Download ${title}` });
      expect(link).toHaveAttribute("href", pdf);
    });
  });
});
