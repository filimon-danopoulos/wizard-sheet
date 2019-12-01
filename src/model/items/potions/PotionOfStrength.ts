import Potion from './Potion'
import Character from '../../Character'

export default class PotionOfStrength extends Potion {
  public readonly type = 'potionofstrength' as string
  public readonly name = 'Potion of Strength' as string
  public readonly description = '' as string
  public readonly cost: number = 50
  constructor(required: boolean = false) {
    super(required)
  }

  public apply(character: Character) {
    character.fight.modify(2)
  }
}
