import Spell, { Category, School } from '../Spell'

export default class PowerWord extends Spell {
  constructor() {
    super({
      name: 'Power Word',
      description: '',
      school: School.Sigilism,
      category: Category.AreaEffect,
      difficulty: 14,
      effect: ''
    })
  }
}
