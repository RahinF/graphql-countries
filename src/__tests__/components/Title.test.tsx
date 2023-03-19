import { render, screen } from '@testing-library/react';
import Title from '../../../components/Title';

describe('Title', () => {
  const text = 'Continents';
  beforeEach(() => {
    render(<Title as="h1">{text}</Title>);
  });

  test('title renders as h1', () => {
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  test('text is correct', () => {
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(text);
  });
});
