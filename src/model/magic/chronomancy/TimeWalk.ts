import Spell, { Category, School } from '../Spell'

export default class TimeWalk extends Spell {
  constructor() {
    super({
      name: 'Time Walk',
      description: '',
      school: School.Chronomancy,
      category: Category.SelfOnly,
      difficulty: 18,
      effect: ''
    })
  }
}
