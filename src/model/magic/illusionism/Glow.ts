import Spell, { Category, School } from '../Spell'

export default class Glow extends Spell {
  public readonly type: string = 'glow'
  constructor() {
    super({
      name: 'Glow',
      description:
        'A brightly glowing light surrounds the target figure. For the rest of the game, all shooting attacks against this figure are at +3. Multiple Glow spells on the same target have no effect.',
      school: School.Illusionism,
      category: Category.LineOfSight,
      difficulty: 10,
      effect: ''
    })
  }
  public copy() {
    const spell = new Glow()
    spell.difficulty = this.difficulty
    return spell
  }
}
