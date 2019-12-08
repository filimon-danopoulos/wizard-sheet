import MagicWeapon from '@/model/items/magic/weapons/MagicWeapon'
import Character from '@/model/Character'
import Item from '@/model/items/Item'
import Crossbow from '@/model/items/basic/weapons/Crossbow'
import Weapon from '../../basic/weapons/Weapon'

export default class CrossbowOfDamage extends MagicWeapon {
  public readonly type: string = 'crossbowofaccuracy'
  public readonly name: string = 'Crossbow of Accuracy'
  public readonly baseWeapon: Weapon = new Crossbow()
  public readonly cost: number = 300
  public readonly description: string = '+1 shoot'

  public apply(character: Character) {
    super.apply(character)
    character.shoot.modify(1)
  }

  public remove(character: Character) {
    super.remove(character)
    character.shoot.modify(-1)
  }
}
