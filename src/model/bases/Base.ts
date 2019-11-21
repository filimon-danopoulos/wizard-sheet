import Item from '../items/Item'

export default abstract class Base {
  public readonly vault: Item[]

  constructor() {
    this.vault = []
  }
}
