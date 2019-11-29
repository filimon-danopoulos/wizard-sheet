import Spell, { Category, School } from '../Spell'

export default class WriteScroll extends Spell {
  public readonly type: string = 'writescroll'
  constructor() {
    super({
      name: 'Write Scroll',
      description:
        'A spellcaster may attempt to cast this spell once after every game. If successful, one scroll is created. The scroll must be of a spell that the spellcaster knows.',
      school: School.Sigilism,
      category: Category.OutOfGame,
      difficulty: 12,
      effect: ''
    })
  }
  public copy() {
    const spell = new WriteScroll()
    spell.difficulty = this.difficulty
    return spell
  }
}
