import Spell, { Category, School } from '../Spell'

export default class WillPower extends Spell {
  constructor() {
    super({
      name: 'Will Power',
      description: '',
      school: School.Soothsaying,
      category: Category.LineOfSight,
      difficulty: 10,
      effect: ''
    })
  }
}
