import Spell, { Category, School } from '../Spell'

export default class Planewalk extends Spell {
  constructor() {
    super({
      school: School.Summoning,
      category: Category.SelfOnly,
      difficulty: 14,
      effect: ''
    })
  }
}
