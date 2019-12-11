import LeatherArmour from '@/model/items/basic/armour/LeatherArmour'
import MagicArmour from './MagicArmour'
import Armour from '../../basic/armour/Armour'
import Character from '@/model/Character'

export default class LeatherArmourOfProtection extends MagicArmour {
  public readonly type: string = 'leatherarmourofprotection'
  public readonly name: string = 'Leather Armour of Protection'
  public readonly baseArmour: Armour = new LeatherArmour()
  public readonly cost: number = 300
  public readonly description: string = '+1 armour'

  public apply(character: Character) {
    super.apply(character)
    character.armour.modify(1)
  }

  public remove(character: Character) {
    super.remove(character)
    character.armour.undo(1)
  }
}
