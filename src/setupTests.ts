import '@testing-library/jest-dom';

// Establish API mocking before all tests.
beforeAll(() => {
  const useRouter = jest.spyOn(require('next/router'), 'useRouter');

  useRouter.mockImplementation(() => ({
    route: '/',
    pathname: '',
    query: '',
    asPath: '',
    push: jest.fn(),
    back: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
    },
    beforePopState: jest.fn(() => null),
    prefetch: jest.fn(() => null),
  }));
});
