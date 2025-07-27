import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
import { BudgetPlatform } from "../BudgetPlatform";

it("renders the component title", () => {
  render(<BudgetPlatform />);
  expect(screen.getByText("Budget by Platform")).toBeInTheDocument();
});

// it('renders all platform items', () => {
//   render(<BudgetPlatform />);
//   expect(screen.getByLabelText('Facebook budget usage')).toBeInTheDocument();
//   expect(screen.getByLabelText('Twitter budget usage')).toBeInTheDocument();
//   expect(screen.getByLabelText('Google budget usage')).toBeInTheDocument();
//   expect(screen.getByLabelText('TikTok budget usage')).toBeInTheDocument();
//   expect(screen.getByLabelText('Bing budget usage')).toBeInTheDocument();
// });

it("displays remaining amounts for each platform", () => {
  render(<BudgetPlatform />);
  expect(screen.getByText("$12,345")).toBeInTheDocument();
  expect(screen.getByText("$1,543")).toBeInTheDocument();
  expect(screen.getByText("$5,678")).toBeInTheDocument();
});

it("displays percentage values", () => {
  render(<BudgetPlatform />);
  expect(screen.getByText("60%")).toBeInTheDocument();
  expect(screen.getByText("85%")).toBeInTheDocument();
  expect(screen.getByText("67%")).toBeInTheDocument();
});

it("has proper accessibility attributes for progress bars", () => {
  render(<BudgetPlatform />);
  const progressBars = screen.getAllByRole("progressbar");
  expect(progressBars).toHaveLength(5);
  expect(progressBars[0]).toHaveAttribute("aria-valuenow", "60");
  expect(progressBars[0]).toHaveAttribute(
    "aria-label",
    "Facebook budget usage"
  );
});
