import Potion from './Potion'
import Character from '../../Character'

export default class HealingPotion extends Potion {
  public readonly type = 'healingpotion' as string
  public readonly name = 'Healing Potion' as string
  public readonly description = '' as string
  public readonly cost: number = 50
  constructor(required: boolean = false) {
    super(required)
  }

  public apply(character: Character) {
    character.health.heal(5)
  }
}
