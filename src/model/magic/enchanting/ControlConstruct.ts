import Spell, { Category, School } from '../Spell'

export default class ControlConstruct extends Spell {
  constructor() {
    super({
      name: 'Control Construct',
      description: '',
      school: School.Enchanting,
      category: Category.LineOfSight,
      difficulty: 12,
      effect: ''
    })
  }
}
