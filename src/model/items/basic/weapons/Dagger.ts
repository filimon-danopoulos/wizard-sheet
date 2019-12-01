import Weapon from './Weapon'
import Character from '../../../Character'
import HandWeapon from './HandWeapon'

export default class Dagger extends Weapon {
  public readonly type = 'dagger' as string
  public readonly name = 'Dagger' as string
  public readonly description = '' as string
  public readonly cost: number = 0
  constructor(required: boolean = false) {
    super(-1, required)
  }

  public apply(character: Character) {
    super.apply(character)
    if (character.items.some(e => e instanceof HandWeapon)) {
      character.fight.modify(1)
    }
  }

  public remove(character: Character) {
    super.remove(character)
    if (character.items.some(e => e instanceof HandWeapon)) {
      character.fight.modify(-1)
    }
  }
}
