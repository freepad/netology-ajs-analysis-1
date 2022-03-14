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

describe.each([
  {
    items: [
      { id: 1, count: 10, price: 200 }
    ],
    count: 1
  },
  {
    items: [
      { id: 1, count: 10, price: 200 },
      { id: 2, count: 10, price: 200 },
      { id: 3, count: 10, price: 200 }
    ],
    count: 3
  },
  {
    items: [],
    count: 0
  }
])('Успешно добавили в корзину $count товаров', ({ items, count  }) => {
  const cart = new Cart()
  expect(cart.items).toHaveLength(0)
  items.forEach(item => {
    cart.addItem(item)
  })
  expect(cart.items).toHaveLength(count)
})
