import Item from '../../Item'
import Character from '../../../Character'

export default abstract class Weapon extends Item {
  public readonly damage: number

  constructor(damage: number, cost: number) {
    super(cost)
    this.damage = damage
  }

  public apply(character: Character) {
    character.damage.modify(this.damage)
  }
}
