import Spell, { Category, School } from '../Spell'

export default class MindControl extends Spell {
  constructor() {
    super({
      name: 'Mind Control',
      description: '',
      school: School.Soothsaying,
      category: Category.LineOfSight,
      difficulty: 12,
      effect: ''
    })
  }
}
