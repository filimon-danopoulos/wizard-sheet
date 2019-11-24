import Spell, { Category, School } from '../Spell'

export default class Push extends Spell {
  constructor() {
    super({
      name: 'Push',
      description: '',
      school: School.Sigilism,
      category: Category.LineOfSight,
      difficulty: 8,
      effect: ''
    })
  }
}
