import app from '../app.js'

beforeEach(() => {
  jest.resetAllMocks();
});

test('app success init', () => {
  console.log = jest.fn()
  app()
  expect(console.log).toHaveBeenCalledWith('App worked')
});
