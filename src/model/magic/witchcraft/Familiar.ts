import Spell, { Category, School } from '../Spell'

export default class Familiar extends Spell {
  public readonly type: string = 'familiar'
  constructor() {
    super({
      name: 'Familiar',
      description:
        'A spellcaster may attempt to cast this spell before any game. If successful, he gains a familiar in the form of a small creature of his choosing. A spellcaster with a familiar gains +2 Health (write as a split stat). If the spellcaster is ever reduced to his last point of health, the familiar is destroyed. At the start of the next game, the spellcaster will revert to his normal health, unless another Familiar spell is successfully cast. This additional health may take a spellcaster over his usual maximum for the stat.',
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
