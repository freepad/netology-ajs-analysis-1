export default class Cart {
  constructor () {
    this.items = []
  }

  addItem (item) {
    this.items.push(item)
  }
}
