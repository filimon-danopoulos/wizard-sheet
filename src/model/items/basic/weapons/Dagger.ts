import Weapon from './Weapon'
import Character from '../../../Character'
import HandWeapon from './HandWeapon'

export default class Dagger extends Weapon {
  constructor() {
    super(-1, 0)
  }

  public apply(character: Character) {
    super.apply(character)
    if (character.items.some(e => e instanceof HandWeapon)) {
      character.fight.modify(1)
    }
  }
}
