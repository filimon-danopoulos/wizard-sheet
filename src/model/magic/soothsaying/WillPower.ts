import Spell, { Category, School } from '../Spell'

export default class WillPower extends Spell {
  constructor() {
    super({
      school: School.Soothsaying,
      category: Category.LineOfSight,
      difficulty: 10,
      effect: ''
    })
  }
}
