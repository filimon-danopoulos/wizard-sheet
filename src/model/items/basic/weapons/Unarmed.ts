import Weapon from './Weapon'
import Character from '../../../Character'

export default class CrossBow extends Weapon {
  constructor() {
    super(-2, 0)
  }

  public apply(character: Character) {
    super.apply(character)
    character.fight.modify(-2)
  }
}
