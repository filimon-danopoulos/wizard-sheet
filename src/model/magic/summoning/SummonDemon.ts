import Spell, { Category, School } from '../Spell'

export default class SummonDemon extends Spell {
  public readonly type: string = 'summondemon'
  constructor() {
    super({
      name: 'Summon Demon',
      description: '',
      school: School.Summoning,
      category: Category.Touch,
      difficulty: 12,
      effect: ''
    })
  }
  public copy() {
    const spell = new SummonDemon()
    spell.difficulty = this.difficulty
    return spell
  }
}
