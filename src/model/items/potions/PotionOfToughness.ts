import Potion from './Potion'
import Character from '../../Character'

export default class PotionOfThoughness extends Potion {
  public readonly type = 'potionofthoughness' as string
  public readonly name = 'Potion of Thoughness' as string
  public readonly description = '' as string
  constructor() {
    super(50)
  }

  public apply(character: Character) {
    character.armour.modify(1)
  }
}
