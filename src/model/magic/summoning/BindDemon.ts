import Spell, { Category, School } from '../Spell'

export default class BindDemon extends Spell {
  public readonly type: string = 'binddemon'
  constructor() {
    super({
      name: 'Bind Demon',
      description: '',
      school: School.Summoning,
      category: Category.LineOfSight,
      difficulty: 10,
      effect: ''
    })
  }
  public copy() {
    const spell = new BindDemon()
    spell.difficulty = this.difficulty
    return spell
  }
}
