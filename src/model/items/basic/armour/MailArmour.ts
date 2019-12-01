import Armour from './Armour'
import Character from '@/model/Character'

export default class MailArmour extends Armour {
  public readonly type = 'mailarmour' as string
  public readonly name = 'Mail Armour' as string
  public readonly description = '' as string
  public readonly cost: number = 0
  constructor(required: boolean = false) {
    super(2, required)
  }

  public apply(character: Character) {
    super.apply(character)
    character.move.modify(-1)
  }

  public remove(character: Character) {
    super.remove(character)
    character.move.modify(1)
  }
}
