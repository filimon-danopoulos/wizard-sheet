import Spell, { Category, School } from '../Spell'

export default class PlanarTear extends Spell {
  public readonly type: string = 'planartear'
  constructor() {
    super({
      name: 'Planar Tear',
      description: '',
      school: School.Summoning,
      category: Category.LineOfSight,
      difficulty: 12,
      effect: ''
    })
  }
  public copy() {
    const spell = new PlanarTear()
    spell.difficulty = this.difficulty
    return spell
  }
}
