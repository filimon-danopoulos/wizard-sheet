import Potion from './Potion'
import Character, { Effect } from '../../Character'

export default class PotionOfInvisibility extends Potion {
  public readonly type = 'potionofstrength' as string
  public readonly name = 'Potion of Invisibility' as string
  public readonly description = '' as string
  constructor(required: boolean = false) {
    super(100, required)
  }

  public apply(character: Character) {
    character.addEffect(Effect.Invisible)
  }
}
