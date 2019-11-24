import Spell, { Category, School } from '../Spell'

export default class Banish extends Spell {
  constructor() {
    super({
      name: 'Banish',
      description: '',
      school: School.Thaumaturgy,
      category: Category.LineOfSight,
      difficulty: 10,
      effect: ''
    })
  }
}
