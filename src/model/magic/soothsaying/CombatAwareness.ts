import Spell, { Category, School } from '../Spell'

export default class CombatAwareness extends Spell {
  public readonly type: string = 'combatawareness'
  constructor() {
    super({
      name: 'Combat Awareness',
      description: '',
      school: School.Soothsaying,
      category: Category.Touch,
      difficulty: 12,
      effect: ''
    })
  }
  public copy() {
    const spell = new CombatAwareness()
    spell.difficulty = this.difficulty
    return spell
  }
}
