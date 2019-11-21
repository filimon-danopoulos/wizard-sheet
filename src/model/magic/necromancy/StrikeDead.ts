import Spell, { Category, School } from '../Spell'

export default class StrikeDead extends Spell {
  constructor() {
    super({
      school: School.Necromancy,
      category: Category.LineOfSight,
      difficulty: 18,
      effect: ''
    })
  }
}
