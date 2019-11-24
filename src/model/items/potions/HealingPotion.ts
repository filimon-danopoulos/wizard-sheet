import Potion from './Potion'
import Character from '../../Character'

export default class HealingPotion extends Potion {
  public readonly type = 'healingpotion' as string
  public readonly name = 'Healing Potion' as string
  public readonly description = '' as string
  constructor() {
    super(50)
  }

  public apply(character: Character) {
    character.health.heal(5)
  }
}
