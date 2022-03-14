import Cart from '../cart.js'

test('Корзина пуста', () => {
  const cart = new Cart()
  expect(cart.items.length).toBe(0)
});

test('Успешно добавили товар в корзину', () => {
  const cart = new Cart()
  expect(cart.items).toHaveLength(0)
  cart.addItem({ id: 1, count: 10, price: 200 })
  expect(cart.items).toHaveLength(1)
})
