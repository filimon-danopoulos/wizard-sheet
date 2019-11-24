import Spell, { Category, School } from '../Spell'

export default class Heal extends Spell {
  constructor() {
    super({
      name: 'Heal',
      description: '',
      school: School.Thaumaturgy,
      category: Category.Touch,
      difficulty: 8,
      effect: ''
    })
  }
}
