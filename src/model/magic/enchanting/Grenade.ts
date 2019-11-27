import Spell, { Category, School } from '../Spell'

export default class Grenade extends Spell {
  public readonly type: string = 'grenade'
  constructor() {
    super({
      name: 'Grenade',
      description: '',
      school: School.Enchanting,
      category: Category.LineOfSight,
      difficulty: 0,
      effect: ''
    })
  }
  public copy() {
    const spell = new Grenade()
    spell.difficulty = this.difficulty
    return spell
  }
}
