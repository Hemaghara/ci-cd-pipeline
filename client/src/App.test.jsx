import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import App from './App';

test('renders hello', () => {
  render(<App />);
  const headingElement = screen.getByText('helloxzcz');
  expect(headingElement).toBeInTheDocument();
});

