import MagicWeapon from '@/model/items/magic/weapons/MagicWeapon'
import Character from '@/model/Character'
import Item from '@/model/items/Item'
import TwoHandedWeapon from '@/model/items/basic/weapons/TwoHandedWeapon'
import Weapon from '../../basic/weapons/Weapon'

export default class TwoHandedWeaponOfGreaterDamage extends MagicWeapon {
  public readonly type: string = 'twohandedweaponofgreaterdamage'
  public readonly name: string = 'Two-Handed Weapon of Greater Damage'
  public readonly baseWeapon: Weapon = new TwoHandedWeapon()
  public readonly cost: number = 400
  public readonly description: string = '+2 damage'
  public apply(character: Character) {
    super.apply(character)
    character.damage.modify(2)
  }

  public remove(character: Character) {
    super.remove(character)
    character.damage.undo(2)
  }
}
