import Character from '../Character'
import JSONSerializable from '../JSONSerializable'

export default abstract class Item extends JSONSerializable {
  public abstract readonly name: string
  public abstract readonly description: string

  public readonly cost: number
  constructor(cost: number) {
    super()
    this.cost = cost
  }

  public apply(character: Character): void {}

  public toJSON(): any {
    return {
      type: this.type
    }
  }
  public fromJSON(data: any): void {}
}