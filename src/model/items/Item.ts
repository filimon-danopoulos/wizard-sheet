import Character from '../Character'
import JSONSerializable from '../JSONSerializable'

export default abstract class Item extends JSONSerializable {
  public abstract readonly name: string
  public abstract readonly description: string

  public readonly required: boolean
  public readonly cost: number
  constructor(cost: number, required: boolean) {
    super()
    this.cost = cost
    this.required = required
  }

  public apply(character: Character): void {}
}
