import MagicWeapon from '@/model/items/magic/weapons/MagicWeapon'
import Item from '@/model/items/Item'
import Crossbow from '@/model/items/basic/weapons/Crossbow'
import Character from '@/model/Character'
import Weapon from '../../basic/weapons/Weapon'

export default class CrossbowOfGreaterDamage extends MagicWeapon {
  public readonly type: string = 'crossbowofgreaterdamage'
  public readonly name: string = 'Crossbow of Greater Damage'
  public readonly baseWeapon: Weapon = new Crossbow()
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
