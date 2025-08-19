import { render } from "@testing-library/react";
import React from "react";
import { Analytics } from "../src/app/(site)/components/Analytics";

describe("Analytics", () => {
  afterEach(() => {
    delete process.env.NEXT_PUBLIC_GA_ID;
  });

  it("renders nothing when GA ID is absent", () => {
    render(<Analytics />);
    expect(
      document.querySelector("script[src*='googletagmanager']"),
    ).toBeNull();
  });

  it("injects GA script when GA ID is present", () => {
    process.env.NEXT_PUBLIC_GA_ID = "G-TEST";
    render(<Analytics />);
    expect(
      document.querySelector("script[src*='googletagmanager']"),
    ).not.toBeNull();
  });
});
