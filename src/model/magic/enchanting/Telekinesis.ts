import Spell, { Category, School } from '../Spell'

export default class Telekinesis extends Spell {
  constructor() {
    super({
      name: 'Telekinesis',
      description: '',
      school: School.Enchanting,
      category: Category.LineOfSight,
      difficulty: 8,
      effect: ''
    })
  }
}
