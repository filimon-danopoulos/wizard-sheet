import Spell, { Category, School } from '../Spell'

export default class MindControl extends Spell {
  constructor() {
    super({
      school: School.Soothsaying,
      category: Category.LineOfSight,
      difficulty: 12,
      effect: ''
    })
  }
}
