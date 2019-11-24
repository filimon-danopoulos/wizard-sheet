import Spell, { Category, School } from '../Spell'

export default class TimeStone extends Spell {
  constructor() {
    super({
      name: 'Time Stone',
      description: '',
      school: School.Chronomancy,
      category: Category.SelfOnly,
      difficulty: 14,
      effect: ''
    })
  }
}
