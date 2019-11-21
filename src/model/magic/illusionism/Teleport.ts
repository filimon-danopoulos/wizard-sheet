import Spell, { Category, School } from '../Spell'

export default class Teleport extends Spell {
  constructor() {
    super({
      school: School.Illusionism,
      category: Category.SelfOnly,
      difficulty: 10,
      effect: ''
    })
  }
}
