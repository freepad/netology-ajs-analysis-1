import app from '../app.js'


beforeEach(() => {
  jest.resetAllMocks();
});

test('should call loadUser once', () => {
  console.log = jest.fn()
  app()
  expect(console.log).toHaveBeenCalledWith('App worked')
});
