import Spell, { Category, School } from '../Spell'

export default class FleetFeet extends Spell {
  public readonly type: string = 'fleetfeet'
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
  public copy() {
    const spell = new FleetFeet()
    spell.difficulty = this.difficulty
    return spell
  }
}
