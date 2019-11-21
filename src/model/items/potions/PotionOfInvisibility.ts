import Potion from './Potion'
import Character, { Effect } from '../../Character'

export default class PotionOfStrength extends Potion {
  constructor() {
    super(100)
  }

  public apply(character: Character) {
    character.addEffect(Effect.Invisible)
  }
}
