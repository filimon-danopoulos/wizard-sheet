import Spell, { Category, School } from '../Spell'

export default class Transpose extends Spell {
  constructor() {
    super({
      name: 'Transpose',
      description: '',
      school: School.Illusionism,
      category: Category.LineOfSight,
      difficulty: 12,
      effect: ''
    })
  }
}
