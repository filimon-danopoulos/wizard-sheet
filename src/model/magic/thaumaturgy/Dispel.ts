import Spell, { Category, School } from '../Spell'

export default class Dispel extends Spell {
  constructor() {
    super({
      school: School.Thaumaturgy,
      category: Category.LineOfSight,
      difficulty: 12,
      effect: ''
    })
  }
}
