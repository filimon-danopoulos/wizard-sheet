import Spell, { Category, School } from '../Spell'

export default class SummonDemon extends Spell {
  constructor() {
    super({
      school: School.Summoning,
      category: Category.Touch,
      difficulty: 12,
      effect: ''
    })
  }
}
