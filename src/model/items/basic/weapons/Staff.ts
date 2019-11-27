import Weapon from './Weapon'
import Character from '../../../Character'

export default class Staff extends Weapon {
  public readonly type = 'staff' as string
  public readonly name = 'Staff' as string
  public readonly description = '' as string
  constructor(required: boolean = false) {
    super(-1, 0, required)
  }

  public apply(character: Character) {
    character.save.modify(1)
  }
}
