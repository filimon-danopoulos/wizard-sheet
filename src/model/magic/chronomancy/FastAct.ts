import Spell, { Category, School } from '../Spell'

export default class FastAct extends Spell {
  public readonly type: string = 'fastact'
  constructor() {
    super({
      name: 'Fast Act',
      description:
        'The target figure will act first next turn, in a special phase before either player’s wizard phase. If this spell is cast multiple times in the same turn, all figures so affected will act in this special phase, starting with the last figure to have had Fast Act cast upon it, and concluding with the first.',
      school: School.Chronomancy,
      category: Category.LineOfSight,
      difficulty: 8,
      effect: ''
    })
  }
  public copy() {
    const spell = new FastAct()
    spell.difficulty = this.difficulty
    return spell
  }
}
