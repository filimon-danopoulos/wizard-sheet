import Character from '@/model/Character'
import MagicArmour from './MagicArmour'

export default class CloakOfProtection extends MagicArmour {
  public readonly type: string = 'cloakofprotection'
  public readonly name: string = 'Cloak of Protection'
  public readonly cost: number = 400
  public readonly description: string = '+1 armour'

  public apply(character: Character) {
    character.armour.modify(1)
  }

  public remove(character: Character) {
    character.armour.modify(-1)
  }
}
