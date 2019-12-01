import Item from '../Item'
import Spell from '@/model/magic/Spell'

export default abstract class SpellItem extends Item {
  public readonly spell: Spell
  constructor(spell: Spell) {
    super(false)
    this.spell = spell
  }
}
