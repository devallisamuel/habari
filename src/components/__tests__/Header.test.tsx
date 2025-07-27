import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { Header } from '../Header';

test('renders the marketing title', () => {
  const mockOnMenuClick = vi.fn();
  render(<Header onMenuClick={mockOnMenuClick} />);
  expect(screen.getByText('Marketing')).toBeInTheDocument();
});

test('calls onMenuClick when menu button is clicked', () => {
  const mockOnMenuClick = vi.fn();
  render(<Header onMenuClick={mockOnMenuClick} />);
  const menuButton = screen.getByLabelText('Open navigation menu');
  fireEvent.click(menuButton);
  expect(mockOnMenuClick).toHaveBeenCalledTimes(1);
});

test('renders time filter buttons', () => {
  const mockOnMenuClick = vi.fn();
  render(<Header onMenuClick={mockOnMenuClick} />);
  expect(screen.getByText('7 Days')).toBeInTheDocument();
  expect(screen.getByText('14 Days')).toBeInTheDocument();
  expect(screen.getByText('1 Month')).toBeInTheDocument();
});



