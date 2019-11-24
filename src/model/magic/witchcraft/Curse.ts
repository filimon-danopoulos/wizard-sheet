import Spell, { Category, School } from '../Spell'

export default class Curse extends Spell {
  constructor() {
    super({
      name: 'Curse',
      description: '',
      school: School.Witchcraft,
      category: Category.LineOfSight,
      difficulty: 10,
      effect: ''
    })
  }
}
