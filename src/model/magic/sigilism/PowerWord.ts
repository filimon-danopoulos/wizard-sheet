import Spell, { Category, School } from '../Spell'

export default class PowerWord extends Spell {
  constructor() {
    super({
      school: School.Sigilism,
      category: Category.AreaEffect,
      difficulty: 14,
      effect: ''
    })
  }
}
