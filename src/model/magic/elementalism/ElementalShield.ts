import Spell, { Category, School } from '../Spell'

export default class ElementalShield extends Spell {
  public readonly type: string = 'elementalshield'
  constructor() {
    super({
      name: 'Elemental Shield',
      description: '',
      school: School.Elementalism,
      category: Category.SelfOnly,
      difficulty: 10,
      effect: ''
    })
  }
  public copy() {
    const spell = new ElementalShield()
    spell.difficulty = this.difficulty
    return spell
  }
}
