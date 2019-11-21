import Spell, { Category, School } from '../Spell'

export default class Curse extends Spell {
  constructor() {
    super({
      school: School.Witchcraft,
      category: Category.LineOfSight,
      difficulty: 10,
      effect: ''
    })
  }
}
