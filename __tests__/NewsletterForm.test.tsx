import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { NewsletterForm } from "../src/app/(site)/components/NewsletterForm";

describe("NewsletterForm", () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({ ok: true }) as any;
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("submits valid email", async () => {
    render(<NewsletterForm />);
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "user@example.com" },
    });
    fireEvent.click(screen.getByRole("button", { name: /subscribe/i }));
    await waitFor(() =>
      expect(screen.getByText(/thanks for subscribing/i)).toBeInTheDocument(),
    );
    expect(global.fetch).toHaveBeenCalledWith(
      "/api/subscribe",
      expect.objectContaining({ method: "POST" }),
    );
  });

  it("shows error on invalid email", async () => {
    render(<NewsletterForm />);
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "bad" },
    });
    fireEvent.click(screen.getByRole("button", { name: /subscribe/i }));
    expect(await screen.findByText(/enter a valid email/i)).toBeInTheDocument();
    expect(global.fetch).not.toHaveBeenCalled();
  });

  it("ignores submission when honeypot filled", async () => {
    render(<NewsletterForm />);
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "user@example.com" },
    });
    fireEvent.change(screen.getByTestId("hp"), { target: { value: "bot" } });
    fireEvent.click(screen.getByRole("button", { name: /subscribe/i }));
    await new Promise((r) => setTimeout(r, 50));
    expect(global.fetch).not.toHaveBeenCalled();
    expect(
      screen.queryByText(/thanks for subscribing/i),
    ).not.toBeInTheDocument();
  });
});
