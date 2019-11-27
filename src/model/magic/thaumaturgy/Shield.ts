import Spell, { Category, School } from '../Spell'

export default class Shield extends Spell {
  public readonly type: string = 'shield'
  constructor() {
    super({
      name: 'Shield',
      description: '',
      school: School.Thaumaturgy,
      category: Category.LineOfSight,
      difficulty: 10,
      effect: ''
    })
  }
  public copy() {
    const spell = new Shield()
    spell.difficulty = this.difficulty
    return spell
  }
}
