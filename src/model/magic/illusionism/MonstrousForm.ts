import Spell, { Category, School } from '../Spell'

export default class MonstrousForm extends Spell {
  constructor() {
    super({
      school: School.Illusionism,
      category: Category.SelfOnly,
      difficulty: 8,
      effect: ''
    })
  }
}
