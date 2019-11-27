import Spell, { Category, School } from '../Spell'

export default class Glow extends Spell {
  public readonly type: string = 'glow'
  constructor() {
    super({
      name: 'Glow',
      description: '',
      school: School.Illusionism,
      category: Category.LineOfSight,
      difficulty: 10,
      effect: ''
    })
  }
  public copy() {
    const spell = new Glow()
    spell.difficulty = this.difficulty
    return spell
  }
}
