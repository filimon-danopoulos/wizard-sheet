import Spell, { Category, School } from '../Spell'

export default class Beauty extends Spell {
  public readonly type: string = 'beauty'
  constructor() {
    super({
      name: 'Beauty',
      description: '',
      school: School.Illusionism,
      category: Category.SelfOnly,
      difficulty: 10,
      effect: ''
    })
  }
  public copy() {
    const spell = new Beauty()
    spell.difficulty = this.difficulty
    return spell
  }
}
