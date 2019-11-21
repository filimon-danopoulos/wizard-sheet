import Spell, { Category, School } from '../Spell'

export default class TimeStone extends Spell {
  constructor() {
    super({
      school: School.Chronomancy,
      category: Category.SelfOnly,
      difficulty: 14,
      effect: ''
    })
  }
}
