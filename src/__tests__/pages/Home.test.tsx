import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import { render, screen } from '@testing-library/react';
import Home, { GET_ALL_CONTINENTS } from '../../../pages/index';

const mockData = [
  { code: 'AF', name: 'Africa' },
  { code: 'AN', name: 'Antarctica' },
  { code: 'AS', name: 'Asia' },
  { code: 'EU', name: 'Europe' },
  { code: 'NA', name: 'North America' },
  { code: 'OC', name: 'Oceania' },
  { code: 'SA', name: 'South America' },
];

const mocks: MockedResponse[] = [
  {
    request: {
      query: GET_ALL_CONTINENTS,
    },
    result: {
      data: mockData,
    },
  },
];
describe('Home', () => {
  test('renders', () => {
    render(
      <MockedProvider
        mocks={mocks}
        addTypename={false}
      >
        <Home continents={mockData} />
      </MockedProvider>
    );

    const continents = mockData.map((continent) =>
      screen.getByText(continent.name)
    );

    expect(continents).toHaveLength(mockData.length);
  });
});
