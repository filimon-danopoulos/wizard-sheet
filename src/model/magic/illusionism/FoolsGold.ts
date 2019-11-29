import Spell, { Category, School } from '../Spell'

export default class FoolsGold extends Spell {
  public readonly type: string = 'foolsgold'
  constructor() {
    super({
      name: 'Fools Gold',
      description:
        'This spell allows the spellcaster to place one additional treasure token before the start of the game. However, he must also secretly note down which of the treasures he has placed is the Fool’s Gold. When any figure comes into contact with the Fool’s Gold, the treasure token immediately vanishes and is removed from the game.',
      school: School.Illusionism,
      category: Category.OutOfGame,
      difficulty: 8,
      effect: ''
    })
  }
  public copy() {
    const spell = new FoolsGold()
    spell.difficulty = this.difficulty
    return spell
  }
}
