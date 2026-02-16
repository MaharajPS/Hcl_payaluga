import { render, screen } from '@testing-library/react';
import App from './App';

test('renders navbar brand', () => {
  render(<App />);
  const brandElement = screen.getByText(/MyBrand/i);
  expect(brandElement).toBeInTheDocument();
});
