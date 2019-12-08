import MagicWeapon from '@/model/items/magic/weapons/MagicWeapon'
import Character from '@/model/Character'
import Item from '@/model/items/Item'
import HandWeapon from '@/model/items/basic/weapons/HandWeapon'
import Weapon from '../../basic/weapons/Weapon'

export default class HandWeaponOfDamage extends MagicWeapon {
  public readonly type: string = 'handweaponofdamage'
  public readonly name: string = 'Hand Weapon of Damage'
  public readonly baseWeapon: Weapon = new HandWeapon()
  public readonly cost: number = 300
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
