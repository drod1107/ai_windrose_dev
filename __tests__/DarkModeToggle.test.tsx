import { render, fireEvent } from "@testing-library/react";
import React from "react";
import { ColorModeProvider } from "../src/app/(site)/hooks/useColorMode";
import { DarkModeToggle } from "../src/app/(site)/components/DarkModeToggle";

describe("DarkModeToggle", () => {
  it("switches theme modes", () => {
    window.matchMedia = jest.fn().mockImplementation(() => ({
      matches: false,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    })) as any;

    const { getByRole } = render(
      <ColorModeProvider>
        <DarkModeToggle />
      </ColorModeProvider>,
    );

    const button = getByRole("button");
    expect(button.getAttribute("aria-pressed")).toBe("false");
    fireEvent.click(button);
    expect(button.getAttribute("aria-pressed")).toBe("true");
  });
});
