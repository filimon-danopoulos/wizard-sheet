import Spell, { Category, School } from '../Spell'

export default class Fog extends Spell {
  constructor() {
    super({
      school: School.Witchcraft,
      category: Category.LineOfSight,
      difficulty: 8,
      effect: ''
    })
  }
}
