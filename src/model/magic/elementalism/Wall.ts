import Spell, { Category, School } from '../Spell'

export default class Wall extends Spell {
  public readonly type: string = 'wall'
  constructor() {
    super({
      name: 'Wall',
      description: '',
      school: School.Elementalism,
      category: Category.LineOfSight,
      difficulty: 10,
      effect: ''
    })
  }
  public copy() {
    const spell = new Wall()
    spell.difficulty = this.difficulty
    return spell
  }
}
