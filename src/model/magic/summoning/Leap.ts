import Spell, { Category, School } from '../Spell'

export default class Leap extends Spell {
  public readonly type: string = 'leap'
  constructor() {
    super({
      name: 'Leap',
      description:
        'The target makes an immediate 10” move in any direction, including vertically. This move is not hindered by any terrain unless that terrain is over 10” high. Target may take no other action this turn. This spell cannot be used to move a figure into combat.',
      school: School.Summoning,
      category: Category.LineOfSight,
      difficulty: 8,
      effect: ''
    })
  }
  public copy() {
    const spell = new Leap()
    spell.difficulty = this.difficulty
    return spell
  }
}
