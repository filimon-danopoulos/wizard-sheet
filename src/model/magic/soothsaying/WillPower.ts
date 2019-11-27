import Spell, { Category, School } from '../Spell'

export default class WillPower extends Spell {
  public readonly type: string = 'willpower'
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
  public copy() {
    const spell = new WillPower()
    spell.difficulty = this.difficulty
    return spell
  }
}
