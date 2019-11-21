import Spell, { Category, School } from '../Spell'

export default class Wall extends Spell {
  constructor() {
    super({
      school: School.Elementalism,
      category: Category.LineOfSight,
      difficulty: 10,
      effect: ''
    })
  }
}
