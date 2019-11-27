import Spell, { Category, School } from '../Spell'

export default class Leap extends Spell {
  public readonly type: string = 'leap'
  constructor() {
    super({
      name: 'Leap',
      description: '',
      school: School.Summoning,
      category: Category.LineOfSight,
      difficulty: 8,
      effect: ''
    })
  }
  public copy() {
    const spell = new Leap()
    spell.difficulty = this.difficulty
    return spell
  }
}
