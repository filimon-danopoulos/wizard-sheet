import Spell, { Category, School } from '../Spell'

export default class Awareness extends Spell {
  public readonly type: string = 'awareness'
  constructor() {
    super({
      name: 'Awareness',
      description:
        'This spell allows the spellcaster to add +1 to his warband’s initiative rolls for the rest of the game. Multiple castings of this spell have no effect, but it may be cast again if the original spellcaster is removed from play.',
      school: School.Soothsaying,
      category: Category.SelfOnly,
      difficulty: 8,
      effect: ''
    })
  }
  public copy() {
    const spell = new Awareness()
    spell.difficulty = this.difficulty
    return spell
  }
}
