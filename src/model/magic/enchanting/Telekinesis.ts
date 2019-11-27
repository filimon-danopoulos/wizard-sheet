import Spell, { Category, School } from '../Spell'

export default class Telekinesis extends Spell {
  public readonly type: string = 'telekinesis'
  constructor() {
    super({
      name: 'Telekinesis',
      description: '',
      school: School.Enchanting,
      category: Category.LineOfSight,
      difficulty: 8,
      effect: ''
    })
  }
  public copy() {
    const spell = new Telekinesis()
    spell.difficulty = this.difficulty
    return spell
  }
}
