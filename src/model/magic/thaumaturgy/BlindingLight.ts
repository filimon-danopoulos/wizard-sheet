import Spell, { Category, School } from '../Spell'

export default class BlindingLight extends Spell {
  public readonly type: string = 'blindinglight'
  constructor() {
    super({
      name: 'Binding Light',
      description: '',
      school: School.Thaumaturgy,
      category: Category.LineOfSight,
      difficulty: 10,
      effect: ''
    })
  }
  public copy() {
    const spell = new BlindingLight()
    spell.difficulty = this.difficulty
    return spell
  }
}
