import Spell, { Category, School } from '../Spell'

export default class CallStorm extends Spell {
  public readonly type: string = 'callstorm'
  constructor() {
    super({
      name: 'Call Storm',
      description: '',
      school: School.Elementalism,
      category: Category.AreaEffect,
      difficulty: 12,
      effect: ''
    })
  }
  public copy() {
    const spell = new CallStorm()
    spell.difficulty = this.difficulty
    return spell
  }
}
