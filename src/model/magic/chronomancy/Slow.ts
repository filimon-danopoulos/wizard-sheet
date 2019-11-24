import Spell, { Category, School } from '../Spell'

export default class Slow extends Spell {
  constructor() {
    super({
      name: 'Slow',
      description: '',
      school: School.Chronomancy,
      category: Category.LineOfSight,
      difficulty: 12,
      effect: ''
    })
  }
}
