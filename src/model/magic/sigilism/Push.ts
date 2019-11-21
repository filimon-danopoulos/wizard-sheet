import Spell, { Category, School } from '../Spell'

export default class Push extends Spell {
  constructor() {
    super({
      school: School.Sigilism,
      category: Category.LineOfSight,
      difficulty: 8,
      effect: ''
    })
  }
}
