import Spell, { Category, School } from '../Spell'

export default class BoneDart extends Spell {
  constructor() {
    super({
      school: School.Necromancy,
      category: Category.LineOfSight,
      difficulty: 8,
      effect: ''
    })
  }
}
