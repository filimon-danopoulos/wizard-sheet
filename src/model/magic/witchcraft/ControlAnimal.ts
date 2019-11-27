import Spell, { Category, School } from '../Spell'

export default class ControlAnimal extends Spell {
  public readonly type: string = 'controlanimal'
  constructor() {
    super({
      name: 'COntrol Animal',
      description: '',
      school: School.Witchcraft,
      category: Category.LineOfSight,
      difficulty: 12,
      effect: ''
    })
  }
  public copy() {
    const spell = new ControlAnimal()
    spell.difficulty = this.difficulty
    return spell
  }
}
