import Spell, { Category, School } from '../Spell'

export default class Posses extends Spell {
  constructor() {
    super({
      school: School.Summoning,
      category: Category.LineOfSight,
      difficulty: 12,
      effect: ''
    })
  }
}
