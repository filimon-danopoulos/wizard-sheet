import Spell, { Category, School } from '../Spell'

export default class FastAct extends Spell {
  constructor() {
    super({
      school: School.Chronomancy,
      category: Category.LineOfSight,
      difficulty: 8,
      effect: ''
    })
  }
}
