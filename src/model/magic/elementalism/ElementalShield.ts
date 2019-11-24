import Spell, { Category, School } from '../Spell'

export default class ElementalShield extends Spell {
  constructor() {
    super({
      name: 'Elemental Shield',
      description: '',
      school: School.Elementalism,
      category: Category.SelfOnly,
      difficulty: 10,
      effect: ''
    })
  }
}
