import Spell, { Category, School } from '../Spell'

export default class TimeWalk extends Spell {
  constructor() {
    super({
      school: School.Chronomancy,
      category: Category.SelfOnly,
      difficulty: 18,
      effect: ''
    })
  }
}
