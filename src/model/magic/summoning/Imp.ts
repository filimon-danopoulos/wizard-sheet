import Spell, { Category, School } from '../Spell'

export default class Imp extends Spell {
  constructor() {
    super({
      name: 'Imp',
      description: '',
      school: School.Summoning,
      category: Category.LineOfSight,
      difficulty: 10,
      effect: ''
    })
  }
}
