import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Chez vous, partout et ailleurs/i);
  expect(linkElement).toBeInTheDocument();
});

const add = (a, b) => a + b
test('add two number', () => {
  expect(add(1, 1)).toBe(2)
})