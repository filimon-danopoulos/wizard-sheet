import Spell, { Category, School } from '../Spell'

export default class Strength extends Spell {
  constructor() {
    super({
      name: 'Strength',
      description: '',
      school: School.Enchanting,
      category: Category.LineOfSight,
      difficulty: 100,
      effect: ''
    })
  }
}
