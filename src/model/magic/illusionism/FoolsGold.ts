import Spell, { Category, School } from '../Spell'

export default class FoolsGold extends Spell {
  public readonly type: string = 'foolsgold'
  constructor() {
    super({
      name: 'Fools Gold',
      description: '',
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
