import Spell, { Category, School } from '../Spell'

export default class Planewalk extends Spell {
  constructor() {
    super({
      name: 'Planewalk',
      description: '',
      school: School.Summoning,
      category: Category.SelfOnly,
      difficulty: 14,
      effect: ''
    })
  }
}
