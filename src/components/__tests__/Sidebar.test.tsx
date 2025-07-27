import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { Sidebar } from '../Sidebar';

test('renders the logo and brand name', () => {
  const mockOnClose = vi.fn();
  render(<Sidebar isOpen={true} onClose={mockOnClose} />);
  expect(screen.getByText('Brutalism')).toBeInTheDocument();
});

test('renders all menu items', () => {
  const mockOnClose = vi.fn();
  render(<Sidebar isOpen={true} onClose={mockOnClose} />);
  expect(screen.getByText('Marketing')).toBeInTheDocument();
  expect(screen.getByText('Analytics')).toBeInTheDocument();
  expect(screen.getByText('Business')).toBeInTheDocument();
});

test('shows active state for Marketing item', () => {
  const mockOnClose = vi.fn();
  render(<Sidebar isOpen={true} onClose={mockOnClose} />);
  const marketingButton = screen.getByRole('button', { name: /marketing/i });
  expect(marketingButton).toHaveAttribute('aria-current', 'page');
});

test('calls onClose when overlay is clicked', () => {
  const mockOnClose = vi.fn();
  render(<Sidebar isOpen={true} onClose={mockOnClose} />);
  const overlay = screen.getByRole('navigation').previousSibling;
  fireEvent.click(overlay as Element);
  expect(mockOnClose).toHaveBeenCalledTimes(1);
});

test('renders upgrade section', () => {
  const mockOnClose = vi.fn();
  render(<Sidebar isOpen={true} onClose={mockOnClose} />);
  expect(screen.getByText('Upgrade to Pro')).toBeInTheDocument();
  expect(screen.getByText('Upgrade Now')).toBeInTheDocument();
});

