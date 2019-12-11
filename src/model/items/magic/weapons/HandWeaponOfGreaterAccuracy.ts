import MagicWeapon from '@/model/items/magic/weapons/MagicWeapon'
import Character from '@/model/Character'
import Item from '@/model/items/Item'
import HandWeapon from '@/model/items/basic/weapons/HandWeapon'
import Weapon from '../../basic/weapons/Weapon'

export default class HandWeaponOfGreaterAccuracy extends MagicWeapon {
  public readonly type: string = 'handweaponofgreateraccuracy'
  public readonly name: string = 'HandWeapon of Greater Accuracy'
  public readonly baseWeapon: Weapon = new HandWeapon()
  public readonly cost: number = 500
  public readonly description: string = '+2 fight'

  public apply(character: Character) {
    super.apply(character)
    character.fight.modify(2)
  }

  public remove(character: Character) {
    super.remove(character)
    character.fight.undo(2)
  }
}
