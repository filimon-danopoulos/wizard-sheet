import Spell, { Category, School } from '../Spell'

export default class Teleport extends Spell {
  public readonly type: string = 'teleport'
  constructor() {
    super({
      name: 'Teleport',
      description: '',
      school: School.Illusionism,
      category: Category.SelfOnly,
      difficulty: 10,
      effect: ''
    })
  }
  public copy() {
    const spell = new Teleport()
    spell.difficulty = this.difficulty
    return spell
  }
}
