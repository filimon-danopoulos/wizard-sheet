import Spell, { Category, School } from '../Spell'

export default class Push extends Spell {
  public readonly type: string = 'push'
  constructor() {
    super({
      name: 'Push',
      description:
        'The target suffers an immediate +10 attack. Instead of taking damage from this attack, the target is moved 1” directly away from the spellcaster for every point of damage he would have taken. If this pushes the target into a piece of terrain or the edge of the board, he stops immediately. Other figures do not stop (or get hit by) a pushed figure – they are assumed to step out of the way. If the target is pushed off a height, he suffers falling damage as normal.',
      school: School.Sigilism,
      category: Category.LineOfSight,
      difficulty: 8,
      effect: ''
    })
  }
  public copy() {
    const spell = new Push()
    spell.difficulty = this.difficulty
    return spell
  }
}
