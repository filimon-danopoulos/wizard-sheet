import Potion from './Potion'
import Character from '../../Character'

export default class ElixirOfSpeed extends Potion {
  public readonly type = 'elixirofspeed' as string
  public readonly name = 'Elixir of Speed' as string
  public readonly description = '' as string
  constructor(required: boolean = false) {
    super(50, required)
  }

  public apply(character: Character) {
    character.move.modify(1)
  }
}
