import Cart from '../cart.js'

test('Корзина пуста', () => {
  const cart = new Cart()
  expect(cart.items.length).toBe(0)
});
