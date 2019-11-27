import Spell, { Category, School } from '../Spell'

export default class Push extends Spell {
  public readonly type: string = 'push'
  constructor() {
    super({
      name: 'Push',
      description: '',
      school: School.Sigilism,
      category: Category.LineOfSight,
      difficulty: 8,
      effect: ''
    })
  }
  public copy() {
    const spell = new Push()
    spell.difficulty = this.difficulty
    return spell
  }
}
