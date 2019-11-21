import Spell, { Category, School } from '../Spell'

export default class Transpose extends Spell {
  constructor() {
    super({
      school: School.Illusionism,
      category: Category.LineOfSight,
      difficulty: 12,
      effect: ''
    })
  }
}
