import Spell, { Category, School } from '../Spell'

export default class Mud extends Spell {
  public readonly type: string = 'mud'
  constructor() {
    super({
      name: 'Mud',
      description:
        'All ground within a 3” radius of a target point becomes rough ground for the rest of the game.',
      school: School.Witchcraft,
      category: Category.LineOfSight,
      difficulty: 10,
      effect: ''
    })
  }
  public copy() {
    const spell = new Mud()
    spell.difficulty = this.difficulty
    return spell
  }
}
