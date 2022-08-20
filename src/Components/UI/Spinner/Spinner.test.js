import { render, screen } from '@testing-library/react';
import Spinner from './Spinner';

test('renders learn react link', () => {
  render(<Spinner />);
  const linkElement = screen.getByText(/Loading.../i);
  expect(linkElement).toBeInTheDocument();
});
