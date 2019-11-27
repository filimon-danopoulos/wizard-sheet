import Spell, { Category, School } from '../Spell'

export default class Curse extends Spell {
  public readonly type: string = 'curse'
  constructor() {
    super({
      name: 'Curse',
      description: '',
      school: School.Witchcraft,
      category: Category.LineOfSight,
      difficulty: 10,
      effect: ''
    })
  }
  public copy() {
    const spell = new Curse()
    spell.difficulty = this.difficulty
    return spell
  }
}
