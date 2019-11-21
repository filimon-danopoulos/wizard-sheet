import Potion from './Potion'
import Character from '../../Character'

export default class PotionOfStrength extends Potion {
  public readonly type = 'potionofstrength' as string
  constructor() {
    super(50)
  }

  public apply(character: Character) {
    character.fight.modify(2)
  }
}
