import Spell, { Category, School } from '../Spell'

export default class AnimateConstruct extends Spell {
  public readonly type: string = 'animateconstruct'
  constructor() {
    super({
      name: 'Animate Construct',
      description: '',
      school: School.Enchanting,
      category: Category.OutOfGame,
      difficulty: 8,
      effect: ''
    })
  }
  public copy() {
    const spell = new AnimateConstruct()
    spell.difficulty = this.difficulty
    return spell
  }
}
