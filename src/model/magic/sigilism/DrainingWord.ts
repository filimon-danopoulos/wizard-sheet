import Spell, { Category, School } from '../Spell'

export default class DrainingWord extends Spell {
  constructor() {
    super({
      school: School.Sigilism,
      category: Category.AreaEffect,
      difficulty: 14,
      effect: ''
    })
  }
}
