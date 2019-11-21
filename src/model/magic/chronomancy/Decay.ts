import Spell, { Category, School } from '../Spell'

export default class Decay extends Spell {
  constructor() {
    super({
      school: School.Chronomancy,
      category: Category.LineOfSight,
      difficulty: 12,
      effect: ''
    })
  }
}
