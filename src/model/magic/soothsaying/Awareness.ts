import Spell, { Category, School } from '../Spell'

export default class Awareness extends Spell {
  constructor() {
    super({
      school: School.Soothsaying,
      category: Category.SelfOnly,
      difficulty: 8,
      effect: ''
    })
  }
}
