import Spell, { Category, School } from '../Spell'

export default class Imp extends Spell {
  public readonly type: string = 'imp'
  constructor() {
    super({
      name: 'Imp',
      description: '',
      school: School.Summoning,
      category: Category.LineOfSight,
      difficulty: 10,
      effect: ''
    })
  }
  public copy() {
    const spell = new Imp()
    spell.difficulty = this.difficulty
    return spell
  }
}
