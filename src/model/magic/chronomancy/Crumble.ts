import Spell, { Category, School } from '../Spell'

export default class Crumble extends Spell {
  constructor() {
    super({
      name: 'Crumble',
      description: '',
      school: School.Chronomancy,
      category: Category.LineOfSight,
      difficulty: 10,
      effect: ''
    })
  }
}
