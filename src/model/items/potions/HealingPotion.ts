import Potion from './Potion'
import Character from '../../Character'

export default class HealingPotion extends Potion {
  constructor() {
    super(50)
  }

  public apply(character: Character) {
    character.health.heal(5)
  }
}
