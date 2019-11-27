import Spell, { Category, School } from '../Spell'

export default class Posses extends Spell {
  public readonly type: string = 'posses'
  constructor() {
    super({
      name: 'Posses',
      description: '',
      school: School.Summoning,
      category: Category.LineOfSight,
      difficulty: 12,
      effect: ''
    })
  }
  public copy() {
    const spell = new Posses()
    spell.difficulty = this.difficulty
    return spell
  }
}
