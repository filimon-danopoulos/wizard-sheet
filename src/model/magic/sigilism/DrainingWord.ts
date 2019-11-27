import Spell, { Category, School } from '../Spell'

export default class DrainingWord extends Spell {
  public readonly type: string = 'drainingword'
  constructor() {
    super({
      name: 'Draining Word',
      description: '',
      school: School.Sigilism,
      category: Category.AreaEffect,
      difficulty: 14,
      effect: ''
    })
  }
  public copy() {
    const spell = new DrainingWord()
    spell.difficulty = this.difficulty
    return spell
  }
}
