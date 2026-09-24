import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio home section', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: 'Dhruv Baslas' })).toBeInTheDocument();
  expect(screen.getByText(/about me/i)).toBeInTheDocument();
  expect(screen.getByRole('navigation', { name: /primary navigation/i })).toBeInTheDocument();
  expect(screen.queryByText(/based in/i)).not.toBeInTheDocument();
  expect(screen.getByRole('link', { name: /let's connect$/i })).toHaveAttribute('href', 'https://www.linkedin.com/in/dhruvbaslas/');
});

test('renders working credential links', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: /azure data engineer associate/i })).toHaveAttribute('href', 'https://www.credly.com/badges/00ab6b23-689b-4ed0-87e3-54df9bb128f5/public_url');
  expect(screen.getByRole('link', { name: /cloud computing & virtualization graduate/i })).toHaveAttribute('href', 'https://www.credly.com/badges/2378c8bd-d48e-4489-a213-7b5c4b3904ac');
  expect(screen.getByRole('link', { name: /read paper/i })).toHaveAttribute('href', 'https://sersc.org/journals/index.php/IJAST/article/view/22011');
});
