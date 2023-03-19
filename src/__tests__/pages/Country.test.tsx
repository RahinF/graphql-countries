import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import { render, screen } from '@testing-library/react';
import pluralize from 'pluralize';
import Country, { GET_COUNTRY_BY_ID } from '../../../pages/country/[id]';

const mockCountry = {
  name: 'Australia',
  capital: 'Canberra',
  currency: 'AUD',
  languages: [{ code: 'en', name: 'English' }],
};

const mocks: MockedResponse[] = [
  {
    request: {
      query: GET_COUNTRY_BY_ID,
    },
    result: {
      data: mockCountry,
    },
  },
];
describe('Country', () => {
  beforeEach(() => {
    render(
      <MockedProvider
        mocks={mocks}
        addTypename={false}
      >
        <Country country={mockCountry} />
      </MockedProvider>
    );
  });

  test('capital renders', () => {
    const capital = screen.getByText(mockCountry.capital);
    expect(capital).toBeInTheDocument();
    expect(capital).toHaveTextContent(mockCountry.capital);
  });

  test('currency renders', () => {
    const currency = screen.getByText(mockCountry.currency);
    expect(currency).toBeInTheDocument();
    expect(currency).toHaveTextContent(mockCountry.currency);
  });

  test('languages renders', () => {
    const languages = mockCountry.languages.map((language) =>
      screen.getByText(language.name)
    );

    expect(languages).toHaveLength(mockCountry.languages.length);
  });

  test('languages text is singular if only one language', () => {
    const text = 'language';
    const languageHeading = screen.getByText(text);

    expect(languageHeading).toBeInTheDocument();
    expect(languageHeading).toHaveTextContent(text);
  });

  test('languages text is plural if more than one language', () => {
    mockCountry.languages.push({ code: 'de', name: 'Deutsch' });
    render(
      <MockedProvider
        mocks={mocks}
        addTypename={false}
      >
        <Country country={mockCountry} />
      </MockedProvider>
    );

    const text = pluralize('language', mockCountry.languages.length);
    const languageHeading = screen.getByText(text);

    expect(languageHeading).toBeInTheDocument();
    expect(languageHeading).toHaveTextContent(text);
  });
});
