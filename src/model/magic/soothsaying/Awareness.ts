import Spell, { Category, School } from '../Spell'

export default class Awareness extends Spell {
  public readonly type: string = 'awareness'
  constructor() {
    super({
      name: 'Awareness',
      description: '',
      school: School.Soothsaying,
      category: Category.SelfOnly,
      difficulty: 8,
      effect: ''
    })
  }
  public copy() {
    const spell = new Awareness()
    spell.difficulty = this.difficulty
    return spell
  }
}
