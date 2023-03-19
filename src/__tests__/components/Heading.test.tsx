import { render, screen } from '@testing-library/react';
import Heading from '../../../components/Heading';

describe('Heading', () => {
  const text = 'Continents';
  beforeEach(() => {
    render(<Heading text={text} />);
  });

  test('link renders', () => {
    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  test('link has correct href', () => {
    expect(screen.getByRole('link')).toHaveAttribute('href', '/search');
  });

  test('icon renders', () => {
    expect(screen.getByTestId('search icon')).toBeInTheDocument();
  });
});
