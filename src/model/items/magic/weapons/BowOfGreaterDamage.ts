import MagicWeapon from '@/model/items/magic/weapons/MagicWeapon'
import Character from '@/model/Character'
import Item from '@/model/items/Item'
import Bow from '@/model/items/basic/weapons/Bow'
import Weapon from '../../basic/weapons/Weapon'

export default class BowOfGreaterDamage extends MagicWeapon {
  public readonly type: string = 'bowofgreaterdamage'
  public readonly name: string = 'Bow of Greater Damage'
  public readonly baseWeapon: Weapon = new Bow()
  public readonly cost: number = 300
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
