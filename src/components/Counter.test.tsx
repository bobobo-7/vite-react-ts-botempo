import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, test, expect } from "vitest";

import Counter from "./Counter";

describe("Counter", () => {
  test("初始显示 count 为 0", () => {
    render(<Counter />);

    expect(screen.getByRole("button")).toHaveTextContent("Count is 0");
  });

  test("点击按钮后 count 增加", async () => {
    render(<Counter />);

    const button = screen.getByRole("button");

    await userEvent.click(button);

    expect(button).toHaveTextContent("Count is 1");
  });

  test("点击多次后 count 正确累加", async () => {
    render(<Counter />);
    const button = screen.getByRole("button");

    await userEvent.click(button);
    await userEvent.click(button);

    expect(button).toHaveTextContent("Count is 2");
  });
});
