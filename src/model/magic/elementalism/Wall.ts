import Spell, { Category, School } from '../Spell'

export default class Wall extends Spell {
  constructor() {
    super({
      name: 'Wall',
      description: '',
      school: School.Elementalism,
      category: Category.LineOfSight,
      difficulty: 10,
      effect: ''
    })
  }
}
