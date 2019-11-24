import Spell, { Category, School } from '../Spell'

export default class Shield extends Spell {
  constructor() {
    super({
      name: 'Shield',
      description: '',
      school: School.Thaumaturgy,
      category: Category.LineOfSight,
      difficulty: 10,
      effect: ''
    })
  }
}
