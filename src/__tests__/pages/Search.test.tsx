import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import Search, { GET_ALL_COUNTRIES } from '../../../pages/search';

const mockCountries = [
  { code: 'BV', name: 'Bouvet Island' },
  { code: 'GS', name: 'South Georgia and the South Sandwich Islands' },
  { code: 'HM', name: 'Heard Island and McDonald Islands' },
  { code: 'TF', name: 'French Southern Territories' },
];

const mocks: MockedResponse[] = [
  {
    request: {
      query: GET_ALL_COUNTRIES,
    },
    result: {
      data: mockCountries,
    },
  },
];

describe('Search', () => {
  beforeEach(() => {
    render(
      <MockedProvider
        mocks={mocks}
        addTypename={false}
      >
        <Search countries={mockCountries} />
      </MockedProvider>
    );
  });

  test('input renders', () => {
    const input = screen.getByLabelText(/search by country/i);
    expect(input).toBeInTheDocument();
  });

  test('countries renders', () => {
    const countries = mockCountries.map((country) =>
      screen.getByText(country.name)
    );

    expect(countries).toHaveLength(mockCountries.length);
  });

  test('input changes countries', async () => {
    user.setup();

    const input = screen.getByLabelText(/search by country/i);
    expect(input).toBeInTheDocument();
    await user.type(input, 'and');

    const countries = screen.getAllByRole('link');
    expect(countries).toHaveLength(3);
  });
});
