import Spell, { Category, School } from '../Spell'

export default class Decay extends Spell {
  public readonly type: string = 'decay'
  constructor() {
    super({
      name: 'Decay',
      description: '',
      school: School.Chronomancy,
      category: Category.LineOfSight,
      difficulty: 12,
      effect: ''
    })
  }
  public copy() {
    const spell = new Decay()
    spell.difficulty = this.difficulty
    return spell
  }
}
