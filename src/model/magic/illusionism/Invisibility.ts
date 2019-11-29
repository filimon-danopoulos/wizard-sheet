import Spell, { Category, School } from '../Spell'

export default class Invisibility extends Spell {
  public readonly type: string = 'invisibility'
  constructor() {
    super({
      name: 'Invisibility',
      description:
        'The target figure becomes invisible and may not be attacked or targeted by spells (although he may still be affected by area effects, such as the blast radius of a Grenade spell). The effects of this spell last until the target attacks, casts a spell, or picks up an item of treasure. The spell can be cast on a figure already carrying treasure, rendering both invisible',
      school: School.Illusionism,
      category: Category.Touch,
      difficulty: 12,
      effect: ''
    })
  }
  public copy() {
    const spell = new Invisibility()
    spell.difficulty = this.difficulty
    return spell
  }
}
