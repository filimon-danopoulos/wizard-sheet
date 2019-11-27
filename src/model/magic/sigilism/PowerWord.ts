import Spell, { Category, School } from '../Spell'

export default class PowerWord extends Spell {
  public readonly type: string = 'powerword'
  constructor() {
    super({
      name: 'Power Word',
      description: '',
      school: School.Sigilism,
      category: Category.AreaEffect,
      difficulty: 14,
      effect: ''
    })
  }
  public copy() {
    const spell = new PowerWord()
    spell.difficulty = this.difficulty
    return spell
  }
}
