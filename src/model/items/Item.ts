import Character from '../Character'

export default abstract class Item {
  public readonly cost: number
  constructor(cost: number) {
    this.cost = cost
  }

  public apply(character: Character): void {}
}
