import Spell, { Category, School } from '../Spell'

export default class Glow extends Spell {
  constructor() {
    super({
      school: School.Illusionism,
      category: Category.LineOfSight,
      difficulty: 10,
      effect: ''
    })
  }
}
