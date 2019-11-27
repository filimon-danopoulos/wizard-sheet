import Item from '../../Item'
import Character from '../../../Character'

export default abstract class Armour extends Item {
  private readonly armour: number

  constructor(armour: number, cost: number, required: boolean) {
    super(cost, required)
    this.armour = armour
  }

  public apply(character: Character) {
    super.apply(character)
    character.armour.modify(this.armour)
  }
}
