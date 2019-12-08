import Character from '../Character'
import JSONSerializable from '../JSONSerializable'

export default abstract class Item extends JSONSerializable {
  public abstract readonly name: string
  public abstract readonly description: string
  public abstract cost: number

  public readonly required: boolean
  constructor(required: boolean) {
    super()
    this.required = required
  }

  public apply(character: Character): void {}
  public remove(character: Character): void {}
}
