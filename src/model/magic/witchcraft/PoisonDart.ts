import Spell, { Category, School } from '../Spell'

export default class PoisonDart extends Spell {
  constructor() {
    super({
      name: 'Poison Dart',
      description: '',
      school: School.Witchcraft,
      category: Category.LineOfSight,
      difficulty: 10,
      effect: ''
    })
  }
}
