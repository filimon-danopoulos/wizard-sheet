import Potion from './Potion'
import Character from '../../Character'

export default class PotionOfThoughness extends Potion {
  constructor() {
    super(50)
  }

  public apply(character: Character) {
    character.armour.modify(1)
  }
}
