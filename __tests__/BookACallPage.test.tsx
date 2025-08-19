import { render, screen } from "@testing-library/react";
import React from "react";
import BookACallPage from "../src/app/book-a-call/page";

describe("BookACallPage", () => {
  it("renders iframe and fallback link", () => {
    render(<BookACallPage />);
    const iframe = screen.getByTestId("calendar-iframe");
    expect(iframe).toBeInTheDocument();
    const link = screen.getByRole("link", { name: /open it in a new tab/i });
    expect(link).toHaveAttribute(
      "href",
      expect.stringContaining("calendar.google"),
    );
  });
});
