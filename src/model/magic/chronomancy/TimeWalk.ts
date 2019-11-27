import Spell, { Category, School } from '../Spell'

export default class TimeWalk extends Spell {
  public readonly type: string = 'timewalk'
  constructor() {
    super({
      name: 'Time Walk',
      description: '',
      school: School.Chronomancy,
      category: Category.SelfOnly,
      difficulty: 18,
      effect: ''
    })
  }
  public copy() {
    const spell = new TimeWalk()
    spell.difficulty = this.difficulty
    return spell
  }
}
