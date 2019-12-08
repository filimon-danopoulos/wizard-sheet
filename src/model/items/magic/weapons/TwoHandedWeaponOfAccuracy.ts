import MagicWeapon from '@/model/items/magic/weapons/MagicWeapon'
import Character from '@/model/Character'
import Item from '@/model/items/Item'
import TwoHandedWeapon from '@/model/items/basic/weapons/TwoHandedWeapon'
import Weapon from '../../basic/weapons/Weapon'

export default class TwoHandedWeaponOfAccuracy extends MagicWeapon {
  public readonly type: string = 'twohandedweaponofaccuracy'
  public readonly name: string = 'Two-Handed Weapon of Accuracy'
  public readonly baseWeapon: Weapon = new TwoHandedWeapon()
  public readonly cost: number = 300
  public readonly description: string = '+1 fight'

  public apply(character: Character) {
    super.apply(character)
    character.fight.modify(1)
  }

  public remove(character: Character) {
    super.remove(character)
    character.fight.modify(-1)
  }
}
