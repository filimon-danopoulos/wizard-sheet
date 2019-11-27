import Spell, { Category, School } from '../Spell'

export default class Transpose extends Spell {
  public readonly type: string = 'transpose'
  constructor() {
    super({
      name: 'Transpose',
      description: '',
      school: School.Illusionism,
      category: Category.LineOfSight,
      difficulty: 12,
      effect: ''
    })
  }
  public copy() {
    const spell = new Transpose()
    spell.difficulty = this.difficulty
    return spell
  }
}
