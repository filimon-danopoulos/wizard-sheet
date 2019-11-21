import Spell, { Category, School } from '../Spell'

export default class Crumble extends Spell {
  constructor() {
    super({
      school: School.Chronomancy,
      category: Category.LineOfSight,
      difficulty: 10,
      effect: ''
    })
  }
}
