# Marketing Dashboard

A responsive marketing dashboard built with React, TypeScript, and Tailwind CSS that recreates a modern analytics interface.

## Features

- **Responsive Design**: Fully responsive layout that works on desktop and mobile devices
- **Component-Based Architecture**: Well-structured, reusable React components
- **Modern Styling**: Clean, professional design using Tailwind CSS
- **TypeScript Support**: Full type safety and better developer experience
- **Interactive Elements**: Hover effects and interactive components

## Components Structure

```
src/
├── components/
│   ├── Sidebar.tsx          # Navigation sidebar with menu items
│   ├── Header.tsx           # Top header with title and time filters
│   ├── MetricCard.tsx       # Reusable metric display cards
│   ├── LineChart.tsx        # Acquisition vs Cost line chart
│   ├── BarChart.tsx         # Traffic Source bar chart
│   ├── BudgetPlatform.tsx   # Budget by Platform progress bars
│   └── __tests__/           # Component tests
│       ├── Header.test.tsx
│       ├── Sidebar.test.tsx
│       └── BudgetPlatform.test.tsx
├── App.tsx                  # Main application component
├── main.tsx                 # Application entry point
├── index.css                # Global styles with Tailwind imports
├── App.css                  # Component-specific styles
└── vite-env.d.ts           # Vite type definitions
```

## Design Decisions

1. **Component Reusability**: Created a generic `MetricCard` component that accepts props for different metrics, making it easy to add new cards.

2. **Responsive Grid Layout**: Used CSS Grid with Tailwind classes for responsive layouts that adapt to different screen sizes.

3. **SVG Charts**: Implemented custom SVG charts for better control over styling and animations, avoiding external chart libraries for this demo.

4. **Color Consistency**: Used a consistent color palette throughout the application matching the original design.

5. **TypeScript Interfaces**: Defined clear interfaces for component props to ensure type safety and better code documentation.

6. **Testing**: Added unit tests using Vitest and React Testing Library for component functionality.

## Setup and Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Run tests:
   ```bash
   npm test
   ```

## Technologies Used

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Build tool and development server
- **Vitest** - Testing framework
- **React Testing Library** - Component testing utilities

## Future Enhancements

- Add real chart libraries (Chart.js, Recharts) for more interactive charts
- Implement state management (Redux/Zustand) for complex data flow
- Add dark mode support
- Include data fetching
- Expand test coverage


