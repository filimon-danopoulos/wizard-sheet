import MagicWeapon from '@/model/items/magic/weapons/MagicWeapon'
import Character from '@/model/Character'
import Item from '@/model/items/Item'
import Staff from '@/model/items/basic/weapons/Staff'
import Weapon from '../../basic/weapons/Weapon'

export default class StaffOfGreaterDamage extends MagicWeapon {
  public readonly type: string = 'staffofgreaterdamage'
  public readonly name: string = 'Staff of Greater Damage'
  public readonly baseWeapon: Weapon = new Staff()
  public readonly cost: number = 200
  public readonly description: string = '+2 damage'
  public apply(character: Character) {
    super.apply(character)
    character.damage.modify(2)
  }

  public remove(character: Character) {
    super.remove(character)
    character.damage.modify(-2)
  }
}
