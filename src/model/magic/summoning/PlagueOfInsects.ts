import Spell, { Category, School } from '../Spell'

export default class PlagueOfInsects extends Spell {
  public readonly type: string = 'plagueofinsects'
  constructor() {
    super({
      name: 'Plague of Insects',
      description: '',
      school: School.Summoning,
      category: Category.LineOfSight,
      difficulty: 12,
      effect: ''
    })
  }
  public copy() {
    const spell = new PlagueOfInsects()
    spell.difficulty = this.difficulty
    return spell
  }
}
