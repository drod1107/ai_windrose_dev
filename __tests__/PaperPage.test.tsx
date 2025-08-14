import { render, screen, within } from "@testing-library/react";
import React from "react";
import PaperPage from "../src/app/paper/page";

describe("PaperPage", () => {
  it("renders PDF viewer and download button", () => {
    // Call component as function to ensure coverage of declaration
    expect(PaperPage()).toBeTruthy();
    render(<PaperPage />);
    const pdf = screen.getByTestId("pdf-viewer");
    expect(pdf).toBeInTheDocument();
    const downloadLinks = screen.getAllByRole("link", {
      name: /download pdf/i,
    });
    expect(downloadLinks[0]).toHaveAttribute("href", "/paper.pdf");
    expect(downloadLinks[0]).toHaveAttribute("download");
  });

  it("renders outline links", () => {
    render(<PaperPage />);
    const outline = screen.getByTestId("outline");
    expect(
      within(outline).getByRole("link", { name: /resources/i }),
    ).toHaveAttribute("href", "/resources");
  });

  it("shows citation block", () => {
    render(<PaperPage />);
    expect(screen.getByText(/cite this work/i)).toBeInTheDocument();
  });

  it("shows share buttons", () => {
    render(<PaperPage />);
    const share = screen.getByTestId("share-buttons");
    expect(
      within(share).getByRole("link", { name: /twitter/i }),
    ).toHaveAttribute("href", expect.stringContaining("twitter"));
    expect(
      within(share).getByRole("link", { name: /linkedin/i }),
    ).toHaveAttribute("href", expect.stringContaining("linkedin"));
  });
});
