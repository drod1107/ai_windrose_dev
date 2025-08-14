import { render } from "@testing-library/react";
import React from "react";
import RootLayout from "../src/app/layout";

describe("RootLayout", () => {
  it("includes emotion insertion point in head", () => {
    window.matchMedia = jest.fn().mockImplementation(() => ({
      matches: false,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    })) as any;

    render(
      <RootLayout>
        <div />
      </RootLayout>,
    );
    const meta = document.head.querySelector(
      'meta[name="emotion-insertion-point"]',
    );
    expect(meta).not.toBeNull();
  });
});
