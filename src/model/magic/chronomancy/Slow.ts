import Spell, { Category, School } from '../Spell'

export default class Slow extends Spell {
  public readonly type: string = 'slow'
  constructor() {
    super({
      name: 'Slow',
      description: '',
      school: School.Chronomancy,
      category: Category.LineOfSight,
      difficulty: 12,
      effect: ''
    })
  }
  public copy() {
    const spell = new Slow()
    spell.difficulty = this.difficulty
    return spell
  }
}
