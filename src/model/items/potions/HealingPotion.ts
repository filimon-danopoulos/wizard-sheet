import Potion from './Potion'
import Character from '../../Character'

export default class HealingPotion extends Potion {
  public readonly type = 'healingpotion' as string
  constructor() {
    super(50)
  }

  public apply(character: Character) {
    character.health.heal(5)
  }
}
