import Spell, { Category, School } from '../Spell'

export default class AnimateConstruct extends Spell {
  constructor() {
    super({
      school: School.Enchanting,
      category: Category.LineOfSight,
      difficulty: 12,
      effect: ''
    })
  }
}
