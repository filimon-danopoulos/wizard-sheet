import Spell, { Category, School } from '../Spell'

export default class Imp extends Spell {
  public readonly type: string = 'imp'
  constructor() {
    super({
      name: 'Imp',
      description:
        'An imp immediately appears, anywhere within the spellcaster’s line of sight, but no closer than 3” to another figure. The imp follows the normal rules for creatures and will act in the next creature phase. If the same spellcaster casts this spell a second time, the first imp will immediately vanish.',
      school: School.Summoning,
      category: Category.LineOfSight,
      difficulty: 10,
      effect: ''
    })
  }
  public copy() {
    const spell = new Imp()
    spell.difficulty = this.difficulty
    return spell
  }
}
