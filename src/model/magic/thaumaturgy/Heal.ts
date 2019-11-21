import Spell, { Category, School } from '../Spell'

export default class Heal extends Spell {
  constructor() {
    super({
      school: School.Thaumaturgy,
      category: Category.Touch,
      difficulty: 8,
      effect: ''
    })
  }
}
