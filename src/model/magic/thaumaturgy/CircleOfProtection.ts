import Spell, { Category, School } from '../Spell'

export default class CircleOfProtection extends Spell {
  constructor() {
    super({
      name: 'Circle of Protection',
      description: '',
      school: School.Thaumaturgy,
      category: Category.Touch,
      difficulty: 12,
      effect: ''
    })
  }
}
