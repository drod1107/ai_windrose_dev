import { render, fireEvent } from "@testing-library/react";
import {
  ColorModeProvider,
  useColorMode,
} from "../src/app/(site)/hooks/useColorMode";
import React from "react";

describe("useColorMode", () => {
  beforeEach(() => {
    // Mock matchMedia for jsdom environment
    window.matchMedia = jest.fn().mockImplementation(() => ({
      matches: false,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    })) as any;
    window.localStorage.clear();
  });

  it("toggles between light and dark", () => {
    const TestComponent = () => {
      const { mode, toggle } = useColorMode();
      return <button onClick={toggle}>{mode}</button>;
    };

    const { getByRole } = render(
      <ColorModeProvider>
        <TestComponent />
      </ColorModeProvider>,
    );

    const button = getByRole("button");
    expect(button.textContent).toBe("light");
    fireEvent.click(button);
    expect(button.textContent).toBe("dark");
  });
});
