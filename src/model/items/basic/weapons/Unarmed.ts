import Weapon from './Weapon'
import Character from '../../../Character'

export default class Unarmed extends Weapon {
  public readonly type = 'unarmed' as string
  public readonly name = 'Unarmed' as string
  public readonly description = '' as string
  public readonly cost: number = 0
  constructor(required: boolean = false) {
    super(-2, required)
  }

  public apply(character: Character) {
    super.apply(character)
    character.fight.modify(-2)
  }

  public remove(character: Character) {
    super.remove(character)
    character.fight.undo(-2)
  }
}
