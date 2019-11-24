import Spell, { Category, School } from '../Spell'

export default class ScatterShot extends Spell {
  constructor() {
    super({
      name: 'Scatter Shot',
      description: '',
      school: School.Elementalism,
      category: Category.AreaEffect,
      difficulty: 12,
      effect: ''
    })
  }
}
