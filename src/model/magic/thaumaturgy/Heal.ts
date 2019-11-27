import Spell, { Category, School } from '../Spell'

export default class Heal extends Spell {
  public readonly type: string = 'heal'
  constructor() {
    super({
      name: 'Heal',
      description: '',
      school: School.Thaumaturgy,
      category: Category.Touch,
      difficulty: 8,
      effect: ''
    })
  }
  public copy() {
    const spell = new Heal()
    spell.difficulty = this.difficulty
    return spell
  }
}
