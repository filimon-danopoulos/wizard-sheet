import Potion from './Potion'
import Character, { Effect } from '../../Character'

export default class PotionOfInvisibility extends Potion {
  public readonly type = 'potionofstrength' as string
  public readonly name = 'Potion of Invisibility' as string
  public readonly description = '' as string
  public readonly cost: number = 100
  constructor(required: boolean = false) {
    super(required)
  }

  public apply(character: Character) {
    character.addEffect(Effect.Invisible)
  }
}
