import MagicArmour from './MagicArmour'
import Character from '@/model/Character'

export default class RingOfProtection extends MagicArmour {
  public readonly type: string = 'ringofprotection'
  public readonly name: string = 'Ring of Protection'
  public readonly cost: number = 400
  public readonly description: string = '+1 armour'

  public apply(character: Character) {
    character.armour.modify(1)
  }

  public remove(character: Character) {
    character.armour.undo(1)
  }
}
