import Armour from './Armour'
import Character from '@/model/Character'

export default class MailArmour extends Armour {
  public readonly type = 'mailarmour' as string
  public readonly name = 'Mail Armour' as string
  public readonly description = '' as string
  constructor(required: boolean = false) {
    super(2, 0, required)
  }

  public apply(character: Character) {
    super.apply(character)
    character.move.modify(-1)
  }
}
