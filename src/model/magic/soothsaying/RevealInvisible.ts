import Spell, { Category, School } from '../Spell'

export default class RevealInvisible extends Spell {
  constructor() {
    super({
      school: School.Soothsaying,
      category: Category.AreaEffect,
      difficulty: 8,
      effect: ''
    })
  }
}
