import Item from '../../Item'
import Character from '@/model/Character'
import Armour from '../../basic/armour/Armour'

export default abstract class MagicArmour extends Item {
  public readonly baseArmour: Armour | null = null

  constructor() {
    super(false)
  }

  public apply(character: Character) {
    if (this.baseArmour !== null) {
      this.baseArmour.apply(character)
    }
  }

  public remove(character: Character) {
    if (this.baseArmour !== null) {
      this.baseArmour.remove(character)
    }
  }
}
