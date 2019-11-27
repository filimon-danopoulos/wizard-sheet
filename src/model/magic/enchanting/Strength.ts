import Spell, { Category, School } from '../Spell'

export default class Strength extends Spell {
  public readonly type: string = 'strength'
  constructor() {
    super({
      name: 'Strength',
      description: '',
      school: School.Enchanting,
      category: Category.LineOfSight,
      difficulty: 100,
      effect: ''
    })
  }
  public copy() {
    const spell = new Strength()
    spell.difficulty = this.difficulty
    return spell
  }
}
