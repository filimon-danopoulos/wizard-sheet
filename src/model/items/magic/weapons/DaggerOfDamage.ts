import Item from '@/model/items/Item'
import Dagger from '@/model/items/basic/weapons/Dagger'
import MagicWeapon from './MagicWeapon'
import Character from '@/model/Character'
import Weapon from '../../basic/weapons/Weapon'

export default class DaggerOfDamage extends MagicWeapon {
  public readonly type: string = 'daggerofdamage'
  public readonly name: string = 'Dagger of Damage'
  public readonly baseWeapon: Weapon = new Dagger()
  public readonly cost: number = 200
  public readonly description: string = '+1 damage'
  public apply(character: Character) {
    super.apply(character)
    character.damage.modify(1)
  }

  public remove(character: Character) {
    super.remove(character)
    character.damage.undo(1)
  }
}
