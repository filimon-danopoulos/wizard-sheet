import Potion from './Potion'
import Character from '../../Character'

export default class ElixirOfSpeed extends Potion {
  public readonly type = 'elixirofspeed' as string
  constructor() {
    super(50)
  }

  public apply(character: Character) {
    character.move.modify(1)
  }
}
