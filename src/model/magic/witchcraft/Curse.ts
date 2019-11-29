import Spell, { Category, School } from '../Spell'

export default class Curse extends Spell {
  public readonly type: string = 'curse'
  constructor() {
    super({
      name: 'Curse',
      description:
        'The target must pass a Will roll versus the casting roll or suffer -1 to its Fight, Shoot, and Will stats for the rest of the game. This spell may be cast on the same target up to five times, for a maximum of - 5 to each of the three stats.',
      school: School.Witchcraft,
      category: Category.LineOfSight,
      difficulty: 10,
      effect: ''
    })
  }
  public copy() {
    const spell = new Curse()
    spell.difficulty = this.difficulty
    return spell
  }
}
