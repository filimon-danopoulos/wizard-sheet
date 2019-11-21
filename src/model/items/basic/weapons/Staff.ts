import Weapon from './Weapon'
import Character from '../../../Character'

export default class Staff extends Weapon {
  constructor() {
    super(-1, 0)
  }

  public apply(character: Character) {
    character.save.modify(1)
  }
}
