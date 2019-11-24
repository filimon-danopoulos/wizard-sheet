import Spell, { Category, School } from '../Spell'

export default class Awareness extends Spell {
  constructor() {
    super({
      name: 'Awareness',
      description: '',
      school: School.Soothsaying,
      category: Category.SelfOnly,
      difficulty: 8,
      effect: ''
    })
  }
}
