import { render, screen } from '@testing-library/react';
import Layout from '../../../components/Layout';

describe('Layout', () => {
  test('children render', () => {
    const buttonText = 'test';
    render(
      <Layout>
        <button>{buttonText}</button>
      </Layout>
    );

    const testChildButton = screen.getByRole('button');

    expect(testChildButton).toBeInTheDocument();
    expect(testChildButton).toHaveTextContent(buttonText);
  });
});
