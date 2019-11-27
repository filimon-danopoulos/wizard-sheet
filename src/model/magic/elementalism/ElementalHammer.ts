import Spell, { Category, School } from '../Spell'

export default class ElementalHammer extends Spell {
  public readonly type: string = 'elementalhammer'
  constructor() {
    super({
      name: 'Elemental Hammer',
      description: '',
      school: School.Elementalism,
      category: Category.LineOfSight,
      difficulty: 10,
      effect: ''
    })
  }
  public copy() {
    const spell = new ElementalHammer()
    spell.difficulty = this.difficulty
    return spell
  }
}
