import Spell, { Category, School } from '../Spell'

export default class FleetFeet extends Spell {
  constructor() {
    super({
      name: 'Fleet Feet',
      description: '',
      school: School.Chronomancy,
      category: Category.LineOfSight,
      difficulty: 10,
      effect: ''
    })
  }
}
