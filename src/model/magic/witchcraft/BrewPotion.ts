import Spell, { Category, School } from '../Spell'

export default class BrewPotion extends Spell {
  public readonly type: string = 'brewpotion'
  constructor() {
    super({
      name: 'Brew Potion',
      description: '',
      school: School.Witchcraft,
      category: Category.OutOfGame,
      difficulty: 12,
      effect: ''
    })
  }
  public copy() {
    const spell = new BrewPotion()
    spell.difficulty = this.difficulty
    return spell
  }
}
