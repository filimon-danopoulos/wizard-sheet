import Spell, { Category, School } from '../Spell'

export default class CircleOfProtection extends Spell {
  public readonly type: string = 'circleofprotection'
  constructor() {
    super({
      name: 'Circle of Protection',
      description: '',
      school: School.Thaumaturgy,
      category: Category.Touch,
      difficulty: 12,
      effect: ''
    })
  }
  public copy() {
    const spell = new CircleOfProtection()
    spell.difficulty = this.difficulty
    return spell
  }
}
