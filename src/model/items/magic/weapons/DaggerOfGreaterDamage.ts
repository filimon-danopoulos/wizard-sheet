import MagicWeapon from '@/model/items/magic/weapons/MagicWeapon'
import Character from '@/model/Character'
import Item from '@/model/items/Item'
import Dagger from '@/model/items/basic/weapons/Dagger'
import Weapon from '../../basic/weapons/Weapon'

export default class DaggerOfGreaterDamage extends MagicWeapon {
  public readonly type: string = 'daggerofgreaterdamage'
  public readonly name: string = 'Dagger of Greater Damage'
  public readonly baseWeapon: Weapon = new Dagger()
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
