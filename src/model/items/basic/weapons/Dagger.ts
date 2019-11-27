import Weapon from './Weapon'
import Character from '../../../Character'
import HandWeapon from './HandWeapon'

export default class Dagger extends Weapon {
  public readonly type = 'dagger' as string
  public readonly name = 'Dagger' as string
  public readonly description = '' as string
  constructor(required: boolean = false) {
    super(-1, 0, required)
  }

  public apply(character: Character) {
    super.apply(character)
    if (character.items.some(e => e instanceof HandWeapon)) {
      character.fight.modify(1)
    }
  }
}
