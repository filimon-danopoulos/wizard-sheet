import Spell, { Category, School } from '../Spell'

export default class ElementalShield extends Spell {
  constructor() {
    super({
      school: School.Elementalism,
      category: Category.SelfOnly,
      difficulty: 10,
      effect: ''
    })
  }
}
