import MagicWeapon from '@/model/items/magic/weapons/MagicWeapon'
import Item from '@/model/items/Item'
import Bow from '@/model/items/basic/weapons/Bow'
import Character from '@/model/Character'
import Weapon from '../../basic/weapons/Weapon'

export default class BowOfAccuracy extends MagicWeapon {
  public readonly type: string = 'bowofaccuracy'
  public readonly name: string = 'Bow of Accuracy'
  public readonly baseWeapon: Weapon = new Bow()
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
