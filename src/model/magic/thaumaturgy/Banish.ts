import Spell, { Category, School } from '../Spell'

export default class Banish extends Spell {
  public readonly type: string = 'banish'
  constructor() {
    super({
      name: 'Banish',
      description:
        'If successfully cast, all demons within line of sight of the spellcaster must pass an immediate Will roll versus the casting roll or be removed from the game.',
      school: School.Thaumaturgy,
      category: Category.LineOfSight,
      difficulty: 10,
      effect: ''
    })
  }
  public copy() {
    const spell = new Banish()
    spell.difficulty = this.difficulty
    return spell
  }
}
