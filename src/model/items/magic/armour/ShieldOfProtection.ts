import Shield from '@/model/items/basic/armour/Shield'
import MagicArmour from './MagicArmour'
import Armour from '../../basic/armour/Armour'
import Character from '@/model/Character'

export default class ShieldOfProtection extends MagicArmour {
  public readonly type: string = 'shieldofprotection'
  public readonly name: string = 'Shield of Protection'
  public readonly baseArmour: Armour = new Shield()
  public readonly cost: number = 400
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
