import Spell, { Category, School } from '../Spell'

export default class Petrify extends Spell {
  public readonly type: string = 'petrify'
  constructor() {
    super({
      name: 'Petrify',
      description: '',
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
