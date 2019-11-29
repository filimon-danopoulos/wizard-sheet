import Spell, { Category, School } from '../Spell'

export default class BrewPotion extends Spell {
  public readonly type: string = 'brewpotion'
  constructor() {
    super({
      name: 'Brew Potion',
      description:
        'A spellcaster may attempt to cast this spell before the game. If successful, he gains one potion of any type (except Elixir of Life). This potion may be given to any member of his warband.',
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
