import Spell, { Category, School } from '../Spell'

export default class MindControl extends Spell {
  public readonly type: string = 'mindcontrol'
  constructor() {
    super({
      name: 'Mind Control',
      description: '',
      school: School.Soothsaying,
      category: Category.LineOfSight,
      difficulty: 12,
      effect: ''
    })
  }
  public copy() {
    const spell = new MindControl()
    spell.difficulty = this.difficulty
    return spell
  }
}
