import Potion from './Potion'
import Character, { Effect } from '../../Character'

export default class PotionOfStrength extends Potion {
  public readonly type = 'potionofstrength' as string
  public readonly name = 'Potion of Invisibility' as string
  public readonly description = '' as string
  constructor() {
    super(100)
  }

  public apply(character: Character) {
    character.addEffect(Effect.Invisible)
  }
}
