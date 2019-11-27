import Spell, { Category, School } from '../Spell'

export default class PoisonDart extends Spell {
  public readonly type: string = 'poisondart'
  constructor() {
    super({
      name: 'Poison Dart',
      description: '',
      school: School.Witchcraft,
      category: Category.LineOfSight,
      difficulty: 10,
      effect: ''
    })
  }
  public copy() {
    const spell = new PoisonDart()
    spell.difficulty = this.difficulty
    return spell
  }
}
