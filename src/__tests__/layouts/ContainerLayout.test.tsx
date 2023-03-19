import { render, screen } from '@testing-library/react';
import ContainerLayout from '../../../components/ContainerLayout';

describe('ContainerLayout', () => {
  test('children render', () => {
    const buttonText = 'test';
    render(
      <ContainerLayout>
        <button>{buttonText}</button>
      </ContainerLayout>
    );

    const testChildButton = screen.getByRole('button');

    expect(testChildButton).toBeInTheDocument();
    expect(testChildButton).toHaveTextContent(buttonText);
  });
});
