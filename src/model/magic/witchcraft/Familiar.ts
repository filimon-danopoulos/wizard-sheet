import Spell, { Category, School } from '../Spell'

export default class Familiar extends Spell {
  public readonly type: string = 'familiar'
  constructor() {
    super({
      name: 'Familiar',
      description: '',
      school: School.Witchcraft,
      category: Category.OutOfGame,
      difficulty: 8,
      effect: ''
    })
  }
  public copy() {
    const spell = new Familiar()
    spell.difficulty = this.difficulty
    return spell
  }
}
