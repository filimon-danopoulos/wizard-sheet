import Spell, { Category, School } from '../Spell'

export default class BonesOfTheEarth extends Spell {
  public readonly type: string = 'bonesoftheearth'
  constructor() {
    super({
      name: 'Bones of the Earth',
      description: '',
      school: School.Necromancy,
      category: Category.LineOfSight,
      difficulty: 10,
      effect: ''
    })
  }
  public copy() {
    const spell = new BonesOfTheEarth()
    spell.difficulty = this.difficulty
    return spell
  }
}
