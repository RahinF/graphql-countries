import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import { render, screen } from '@testing-library/react';
import Continent, { GET_COUNTRY } from '../../../pages/continents/[id]';

const mockContinent = 'Antarctica';

const mockCountries = [
  { code: 'BV', name: 'Bouvet Island' },
  { code: 'GS', name: 'South Georgia and the South Sandwich Islands' },
  { code: 'HM', name: 'Heard Island and McDonald Islands' },
  { code: 'TF', name: 'French Southern Territories' },
];

const mocks: MockedResponse[] = [
  {
    request: {
      query: GET_COUNTRY,
    },
    result: {
      data: mockCountries,
    },
  },
];
describe('Continent', () => {
  test('component renders with list of countries', () => {
    render(
      <MockedProvider
        mocks={mocks}
        addTypename={false}
      >
        <Continent
          continent={mockContinent}
          countries={mockCountries}
        />
      </MockedProvider>
    );

    const countries = mockCountries.map((country) =>
      screen.getByText(country.name)
    );

    expect(countries).toHaveLength(mockCountries.length);
  });

  test('heading renders', () => {
    render(
      <MockedProvider
        mocks={mocks}
        addTypename={false}
      >
        <Continent
          continent={mockContinent}
          countries={mockCountries}
        />
      </MockedProvider>
    );

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(mockContinent);
  });
});
