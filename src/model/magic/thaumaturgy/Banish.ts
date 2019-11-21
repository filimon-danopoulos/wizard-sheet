import Spell, { Category, School } from '../Spell'

export default class Banish extends Spell {
  constructor() {
    super({
      school: School.Thaumaturgy,
      category: Category.LineOfSight,
      difficulty: 10,
      effect: ''
    })
  }
}
