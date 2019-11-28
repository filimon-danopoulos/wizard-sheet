import Item from '../items/Item'
import JSONSerializable from '../JSONSerializable'
import Character from '../Character'
import Resource from './resources/Resource'

export default abstract class Base extends JSONSerializable {
  public abstract name: string
  public abstract description: string
  public readonly vault: Item[] = []
  public readonly resources: Resource[] = []
  public abstract apply(character: Character): void
}
