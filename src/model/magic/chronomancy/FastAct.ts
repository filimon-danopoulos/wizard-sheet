import Spell, { Category, School } from '../Spell'

export default class FastAct extends Spell {
  public readonly type: string = 'fastact'
  constructor() {
    super({
      name: 'Fast Act',
      description: '',
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
