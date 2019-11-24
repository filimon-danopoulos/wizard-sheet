import Spell, { Category, School } from '../Spell'

export default class extends Spell {
  constructor() {
    super({
      name: 'Invisibility',
      description: '',
      school: School.Illusionism,
      category: Category.Touch,
      difficulty: 12,
      effect: ''
    })
  }
}
