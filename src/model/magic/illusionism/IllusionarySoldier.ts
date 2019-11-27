import Spell, { Category, School } from '../Spell'

export default class IllusionarySoldier extends Spell {
  public readonly type: string = 'illusionarysoldier'
  constructor() {
    super({
      name: 'Illusionary Soldier',
      description: '',
      school: School.Illusionism,
      category: Category.OutOfGame,
      difficulty: 12,
      effect: ''
    })
  }
  public copy() {
    const spell = new IllusionarySoldier()
    spell.difficulty = this.difficulty
    return spell
  }
}
