import Spell, { Category, School } from '../Spell'

export default class TimeStone extends Spell {
  public readonly type: string = 'timestone'
  constructor() {
    super({
      name: 'Time Stone',
      description: '',
      school: School.Chronomancy,
      category: Category.SelfOnly,
      difficulty: 14,
      effect: ''
    })
  }
  public copy() {
    const spell = new TimeStone()
    spell.difficulty = this.difficulty
    return spell
  }
}
