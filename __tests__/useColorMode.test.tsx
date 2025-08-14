import { render, fireEvent, waitFor } from "@testing-library/react";
import {
  ColorModeProvider,
  useColorMode,
} from "../src/app/(site)/hooks/useColorMode";
import React from "react";

describe("useColorMode", () => {
  const setupMatchMedia = (matches: boolean) => {
    window.matchMedia = jest.fn().mockImplementation(() => ({
      matches,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    })) as any;
  };

  beforeEach(() => {
    setupMatchMedia(false);
    window.localStorage.clear();
  });

  it("toggles between light and dark and persists to localStorage", async () => {
    const TestComponent = () => {
      const { mode, toggle } = useColorMode();
      return <button onClick={toggle}>{mode}</button>;
    };

    const { getByRole, unmount } = render(
      <ColorModeProvider>
        <TestComponent />
      </ColorModeProvider>,
    );

    const button = getByRole("button");
    expect(button.textContent).toBe("light");
    fireEvent.click(button);
    await waitFor(() => expect(button.textContent).toBe("dark"));
    expect(window.localStorage.getItem("color-mode")).toBe("dark");

    unmount();

    const { getByRole: getByRole2 } = render(
      <ColorModeProvider>
        <TestComponent />
      </ColorModeProvider>,
    );

    const button2 = getByRole2("button");
    await waitFor(() => expect(button2.textContent).toBe("dark"));
  });

  it("uses system preference on first load", async () => {
    setupMatchMedia(true);

    const TestComponent = () => {
      const { mode } = useColorMode();
      return <span>{mode}</span>;
    };

    const { getByText } = render(
      <ColorModeProvider>
        <TestComponent />
      </ColorModeProvider>,
    );

    await waitFor(() => expect(getByText("dark")).toBeInTheDocument());
  });
});
