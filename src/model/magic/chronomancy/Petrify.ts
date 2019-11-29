import Spell, { Category, School } from '../Spell'

export default class Petrify extends Spell {
  public readonly type: string = 'petrify'
  constructor() {
    super({
      name: 'Petrify',
      description:
        'The target is temporarily frozen solid and may take no actions on its next activation. After the next activation, the figure may move as normal. The target may attempt to resist this spell by succeeding with a Will roll versus the casting roll. ',
      school: School.Chronomancy,
      category: Category.LineOfSight,
      difficulty: 12,
      effect: ''
    })
  }
  public copy() {
    const spell = new Petrify()
    spell.difficulty = this.difficulty
    return spell
  }
}
