import Spell, { Category, School } from '../Spell'

export default class Posses extends Spell {
  constructor() {
    super({
      name: 'Posses',
      description: '',
      school: School.Summoning,
      category: Category.LineOfSight,
      difficulty: 12,
      effect: ''
    })
  }
}
