import Spell, { Category, School } from '../Spell'

export default class Leap extends Spell {
  constructor() {
    super({
      name: 'Leap',
      description: '',
      school: School.Summoning,
      category: Category.LineOfSight,
      difficulty: 8,
      effect: ''
    })
  }
}
