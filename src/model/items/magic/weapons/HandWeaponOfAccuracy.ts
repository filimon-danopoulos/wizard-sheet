import MagicWeapon from '@/model/items/magic/weapons/MagicWeapon'
import Character from '@/model/Character'
import Item from '@/model/items/Item'
import HandWeapon from '@/model/items/basic/weapons/HandWeapon'
import Weapon from '../../basic/weapons/Weapon'

export default class HandWeaponOfAccuracy extends MagicWeapon {
  public readonly type: string = 'handweaponofaccuracy'
  public readonly name: string = 'HandWeapon of Accuracy'
  public readonly baseWeapon: Weapon = new HandWeapon()
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
