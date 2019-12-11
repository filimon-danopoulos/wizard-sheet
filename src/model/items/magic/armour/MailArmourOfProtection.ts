import MailArmour from '@/model/items/basic/armour/MailArmour'
import Armour from '../../basic/armour/Armour'
import MagicArmour from './MagicArmour'
import Character from '@/model/Character'

export default class MailArmourOfProtection extends MagicArmour {
  public readonly type: string = 'mailarmourofprotection'
  public readonly name: string = 'Mail Armour of Protection'
  public readonly baseArmour: Armour = new MailArmour()
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
