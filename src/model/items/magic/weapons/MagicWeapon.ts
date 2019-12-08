import Item from '../../Item'
import Character from '@/model/Character'
import Weapon from '../../basic/weapons/Weapon'

export default abstract class MagicWeapon extends Item {
  public abstract readonly baseWeapon: Weapon

  constructor() {
    super(false)
  }

  public apply(character: Character) {
    this.baseWeapon.apply(character)
  }

  public remove(character: Character) {
    this.baseWeapon.remove(character)
  }
}
