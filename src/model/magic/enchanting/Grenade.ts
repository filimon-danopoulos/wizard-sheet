import Spell, { Category, School } from '../Spell'

export default class Grenade extends Spell {
  constructor() {
    super({
      school: School.Enchanting,
      category: Category.LineOfSight,
      difficulty: 0,
      effect: ''
    })
  }
}
