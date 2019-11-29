import Spell, { Category, School } from '../Spell'

export default class Strength extends Spell {
  public readonly type: string = 'strength'
  constructor() {
    super({
      name: 'Strength',
      description:
        'The target receives +2 Fight for the rest of the game. Multiple Strength spells on the same target have no effect.',
      school: School.Enchanting,
      category: Category.LineOfSight,
      difficulty: 100,
      effect: ''
    })
  }
  public copy() {
    const spell = new Strength()
    spell.difficulty = this.difficulty
    return spell
  }
}
