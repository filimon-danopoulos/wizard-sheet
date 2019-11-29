import Spell, { Category, School } from '../Spell'

export default class Transpose extends Spell {
  public readonly type: string = 'transpose'
  constructor() {
    super({
      name: 'Transpose',
      description:
        'This spell switches the position of two figures on the board. The two figures being transposed must be within 10” of each other and both must be within line of sight of the spellcaster. The spellcaster may cast Transpose to switch himself with another figure. If he attempts to transpose an enemy figure (either a creature or member of a rival warband), they may each make a Will roll versus the casting roll. If even one succeeds with this Will roll, the spell fails. This spell may target figures in combat.',
      school: School.Illusionism,
      category: Category.LineOfSight,
      difficulty: 12,
      effect: ''
    })
  }
  public copy() {
    const spell = new Transpose()
    spell.difficulty = this.difficulty
    return spell
  }
}
