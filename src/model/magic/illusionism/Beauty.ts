import Spell, { Category, School } from '../Spell'

export default class Beauty extends Spell {
  constructor() {
    super({
      name: 'Beauty',
      description: '',
      school: School.Illusionism,
      category: Category.SelfOnly,
      difficulty: 10,
      effect: ''
    })
  }
}