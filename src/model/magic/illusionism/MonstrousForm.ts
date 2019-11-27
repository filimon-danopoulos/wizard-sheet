import Spell, { Category, School } from '../Spell'

export default class MonstrousForm extends Spell {
  public readonly type: string = 'monstrousform'
  constructor() {
    super({
      name: 'Monstrous Form',
      description: '',
      school: School.Illusionism,
      category: Category.SelfOnly,
      difficulty: 8,
      effect: ''
    })
  }
  public copy() {
    const spell = new MonstrousForm()
    spell.difficulty = this.difficulty
    return spell
  }
}
