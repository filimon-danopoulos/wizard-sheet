import Item from '../../Item'
import Character from '../../../Character'

export default abstract class Armour extends Item {
  private readonly armour: number

  constructor(armour: number, cost: number) {
    super(cost)
    this.armour = armour
  }

  public apply(character: Character) {
    character.armour.modify(this.armour)
  }
}
