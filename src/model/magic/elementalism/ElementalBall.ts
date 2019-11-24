import Spell, { Category, School } from '../Spell'

export default class ElementalBall extends Spell {
  constructor() {
    super({
      name: 'Elemental Ball',
      description: '',
      school: School.Elementalism,
      category: Category.LineOfSight,
      difficulty: 12,
      effect: ''
    })
  }
}
