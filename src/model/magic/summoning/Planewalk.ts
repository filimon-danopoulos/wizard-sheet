import Spell, { Category, School } from '../Spell'

export default class Planewalk extends Spell {
  public readonly type: string = 'planewalk'
  constructor() {
    super({
      name: 'Planewalk',
      description: '',
      school: School.Summoning,
      category: Category.SelfOnly,
      difficulty: 14,
      effect: ''
    })
  }
  public copy() {
    const spell = new Planewalk()
    spell.difficulty = this.difficulty
    return spell
  }
}
