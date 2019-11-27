import Spell, { Category, School } from '../Spell'

export default class CreateGrimoire extends Spell {
  public readonly type: string = 'creategrimoire'
  constructor() {
    super({
      name: 'Create Grimoire',
      description: '',
      school: School.Sigilism,
      category: Category.OutOfGame,
      difficulty: 12,
      effect: ''
    })
  }
  public copy() {
    const spell = new CreateGrimoire()
    spell.difficulty = this.difficulty
    return spell
  }
}
