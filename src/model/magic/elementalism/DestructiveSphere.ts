import Spell, { Category, School } from '../Spell'

export default class DestructiveSphere extends Spell {
  constructor() {
    super({
      name: 'Destructive Sphere',
      description: '',
      school: School.Elementalism,
      category: Category.AreaEffect,
      difficulty: 12,
      effect: ''
    })
  }
}
