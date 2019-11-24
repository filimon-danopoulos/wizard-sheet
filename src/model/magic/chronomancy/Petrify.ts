import Spell, { Category, School } from '../Spell'

export default class Petrify extends Spell {
  constructor() {
    super({
      name: 'Petrify',
      description: '',
      school: School.Chronomancy,
      category: Category.LineOfSight,
      difficulty: 12,
      effect: ''
    })
  }
}
