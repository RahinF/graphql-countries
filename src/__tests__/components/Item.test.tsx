import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import Item from '../../../components/Item';

describe('Item', () => {
  const href = '/country/AU';
  const text = 'Australia';

  beforeEach(() => {
    render(
      <Item
        href={href}
        text={text}
      />
    );
  });
  test('link renders', () => {
    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  test('correct href', () => {
    expect(screen.getByRole('link')).toHaveAttribute('href', href);
  });

  test('text is correct', () => {
    expect(screen.getByRole('link')).toHaveTextContent(text);
  });

  test('no animation class when not hovered', () => {
    const link = screen.getByRole('link');
    expect(link).not.toHaveClass('card-entry');
    expect(link).not.toHaveClass('card-exit');
  });

  test('animation start class appears when link is hovered', async () => {
    user.setup();
    const link = screen.getByRole('link');
    await user.hover(link);
    expect(link).toHaveClass('card-entry');
  });

  test('animation exit class appears when link is unhovered', async () => {
    user.setup();
    const link = screen.getByRole('link');

    await user.hover(link);
    expect(link).toHaveClass('card-entry');

    await user.unhover(link);
    expect(link).toHaveClass('card-exit');
  });
});
