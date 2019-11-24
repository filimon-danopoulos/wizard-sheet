import Spell, { Category, School } from '../Spell'

export default class Fog extends Spell {
  constructor() {
    super({
      name: 'Fog',
      description: '',
      school: School.Witchcraft,
      category: Category.LineOfSight,
      difficulty: 8,
      effect: ''
    })
  }
}
