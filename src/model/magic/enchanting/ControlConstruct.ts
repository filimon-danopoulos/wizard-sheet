import Spell, { Category, School } from '../Spell'

export default class ControlConstruct extends Spell {
  public readonly type: string = 'controlconstruct'
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
  public copy() {
    const spell = new ControlConstruct()
    spell.difficulty = this.difficulty
    return spell
  }
}
