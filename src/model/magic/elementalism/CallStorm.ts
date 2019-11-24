import Spell, { Category, School } from '../Spell'

export default class CallStorm extends Spell {
  constructor() {
    super({
      name: 'Call Storm',
      description: '',
      school: School.Elementalism,
      category: Category.AreaEffect,
      difficulty: 12,
      effect: ''
    })
  }
}
