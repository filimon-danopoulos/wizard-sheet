import Spell, { Category, School } from '../Spell'

export default class ElementalBall extends Spell {
  public readonly type: string = 'elementalball'
  constructor() {
    super({
      name: 'Elemental Ball',
      description: '',
      school: School.Elementalism,
      category: Category.LineOfSight,
      difficulty: 12,
      effect: ''
    })
  }
  public copy() {
    const spell = new ElementalBall()
    spell.difficulty = this.difficulty
    return spell
  }
}
