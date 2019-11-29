import Spell, { Category, School } from '../Spell'

export default class Fog extends Spell {
  public readonly type: string = 'fog'
  constructor() {
    super({
      name: 'Fog',
      description:
        'A line of fog, 6” long, 3” high and 1” thick settles across the battlefield within line of sight of the caster (use cotton or paper to mark the patch of fog). Figures can move through the fog with no difficulty, but no-one may draw line of sight through it. At the start of each new turn, roll a d20. On a result of 19 or 20 the fog dissipates and is removed from the table.',
      school: School.Witchcraft,
      category: Category.LineOfSight,
      difficulty: 8,
      effect: ''
    })
  }
  public copy() {
    const spell = new Fog()
    spell.difficulty = this.difficulty
    return spell
  }
}
