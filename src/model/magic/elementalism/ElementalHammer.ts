import Spell, { Category, School } from '../Spell'

export default class ElementalHammer extends Spell {
  constructor() {
    super({
      name: 'Elemental Hammer',
      description: '',
      school: School.Elementalism,
      category: Category.LineOfSight,
      difficulty: 10,
      effect: ''
    })
  }
}
