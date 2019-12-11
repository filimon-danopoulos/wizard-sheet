import MagicWeapon from '@/model/items/magic/weapons/MagicWeapon'
import Character from '@/model/Character'
import Item from '@/model/items/Item'
import Staff from '@/model/items/basic/weapons/Staff'
import Weapon from '../../basic/weapons/Weapon'

export default class StaffOfAccuracy extends MagicWeapon {
  public readonly type: string = 'staffofaccuracy'
  public readonly name: string = 'Staff of Accuracy'
  public readonly baseWeapon: Weapon = new Staff()
  public readonly cost: number = 200
  public readonly description: string = '+1 fight'

  public apply(character: Character) {
    super.apply(character)
    character.fight.modify(1)
  }

  public remove(character: Character) {
    super.remove(character)
    character.fight.undo(1)
  }
}
