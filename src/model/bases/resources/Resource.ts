import JSONSerializable from '../../JSONSerializable'
import Character from '../../Character'

export default abstract class Resource extends JSONSerializable {
  public abstract name: string
  public abstract description: string
  public abstract readonly cost: number
  public abstract apply(character: Character): void
}
