import Spell, { Category, School } from '../Spell'

export default class CircleOfProtection extends Spell {
  constructor() {
    super({
      school: School.Thaumaturgy,
      category: Category.Touch,
      difficulty: 12,
      effect: ''
    })
  }
}
