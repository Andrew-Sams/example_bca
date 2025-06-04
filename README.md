# Monte Carlo NPV Simulation Demo

This project provides a single page web tool (`index.html`) for exploring cost-benefit analysis using Monte Carlo simulation.

## Usage

1. Clone or download this repository.
2. Open `index.html` in any modern web browser – no server is required.

Once opened you can define cost and benefit items, adjust the discount rate and switch between several interactive visualizations.

## Features

- **Time Series Chart** – displays the deterministic NPV along with 5th and 95th percentile bands from Monte Carlo runs.
- **Monte Carlo Tab** – shows a histogram of terminal NPVs and a scatter plot of total present value costs vs. benefits.
- **Table Tab** – summarizes nominal and present value totals for cost, benefit and net values.
- **Sensitivity & Pareto Tabs** – visualize the impact of each item on overall NPV and the relative contribution of each entry.
- **Data View Tab** – tabular view of input values with a toggle between nominal and NPV values.

All calculations are performed in the browser using Chart.js for visualization.
