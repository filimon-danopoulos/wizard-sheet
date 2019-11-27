import Spell, { Category, School } from '../Spell'

export default class ExplosiveRune extends Spell {
  public readonly type: string = 'explosiverune'
  constructor() {
    super({
      name: 'Explosive Rune',
      description: '',
      school: School.Sigilism,
      category: Category.Touch,
      difficulty: 10,
      effect: ''
    })
  }
  public copy() {
    const spell = new ExplosiveRune()
    spell.difficulty = this.difficulty
    return spell
  }
}
