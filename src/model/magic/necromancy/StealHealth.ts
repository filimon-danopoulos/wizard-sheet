import Spell, { Category, School } from '../Spell'

export default class StealHealth extends Spell {
  constructor() {
    super({
      school: School.Necromancy,
      category: Category.LineOfSight,
      difficulty: 10,
      effect: ''
    })
  }
}
