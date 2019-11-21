import Spell, { Category, School } from '../Spell'

export default class ElementalBolt extends Spell {
  constructor() {
    super({
      school: School.Elementalism,
      category: Category.LineOfSight,
      difficulty: 12,
      effect: ''
    })
  }
}
