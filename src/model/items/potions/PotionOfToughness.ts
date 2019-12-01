import Potion from './Potion'
import Character from '../../Character'

export default class PotionOfThoughness extends Potion {
  public readonly type = 'potionofthoughness' as string
  public readonly name = 'Potion of Thoughness' as string
  public readonly description = '' as string
  public readonly cost: number = 50
  constructor(required: boolean = false) {
    super(required)
  }

  public apply(character: Character) {
    character.armour.modify(1)
  }
}
