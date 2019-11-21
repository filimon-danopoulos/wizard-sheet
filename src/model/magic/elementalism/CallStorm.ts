import Spell, { Category, School } from '../Spell'

export default class CallStorm extends Spell {
  constructor() {
    super({
      school: School.Elementalism,
      category: Category.AreaEffect,
      difficulty: 12,
      effect: ''
    })
  }
}
