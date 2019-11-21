import Spell, { Category, School } from '../Spell'

export default class Leap extends Spell {
  constructor() {
    super({
      school: School.Summoning,
      category: Category.LineOfSight,
      difficulty: 8,
      effect: ''
    })
  }
}
