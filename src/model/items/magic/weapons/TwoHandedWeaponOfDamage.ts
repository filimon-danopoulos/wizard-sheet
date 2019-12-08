import MagicWeapon from '@/model/items/magic/weapons/MagicWeapon'
import Character from '@/model/Character'
import Item from '@/model/items/Item'
import TwoHandedWeapon from '@/model/items/basic/weapons/TwoHandedWeapon'
import Weapon from '../../basic/weapons/Weapon'

export default class TwoHandedWeaponOfDamage extends MagicWeapon {
  public readonly type: string = 'twohandedweaponofdamage'
  public readonly name: string = 'Two-Handed Weapon of Damage'
  public readonly baseWeapon: Weapon = new TwoHandedWeapon()
  public readonly cost: number = 200
  public readonly description: string = '+1 damage'
  public apply(character: Character) {
    super.apply(character)
    character.damage.modify(1)
  }

  public remove(character: Character) {
    super.remove(character)
    character.damage.modify(-1)
  }
}
