import { render, screen } from '@testing-library/react';
import BackButton from '../../../components/BackButton';

describe('BackButton', () => {
  beforeEach(() => {
    render(<BackButton />);
  });

  test('button renders', () => {
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('text renders', () => {
    expect(screen.getByRole('button')).toHaveTextContent('back');
  });

  test('icon renders', () => {
    expect(screen.getByTestId('back arrow icon')).toBeInTheDocument();
  });
});
