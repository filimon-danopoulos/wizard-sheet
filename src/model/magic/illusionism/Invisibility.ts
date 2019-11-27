import Spell, { Category, School } from '../Spell'

export default class Invisibility extends Spell {
  public readonly type: string = 'invisibility'
  constructor() {
    super({
      name: 'Invisibility',
      description: '',
      school: School.Illusionism,
      category: Category.Touch,
      difficulty: 12,
      effect: ''
    })
  }
  public copy() {
    const spell = new Invisibility()
    spell.difficulty = this.difficulty
    return spell
  }
}
