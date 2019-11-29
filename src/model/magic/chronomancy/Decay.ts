import Spell, { Category, School } from '../Spell'

export default class Decay extends Spell {
  public readonly type: string = 'decay'
  constructor() {
    super({
      name: 'Decay',
      description:
        'The spellcaster selects and attacks a target’s weapon, causing it to decay and fall apart, rendering it useless for the rest of the game. This spell has no effect on magic weapons (even those only temporarily enchanted)',
      school: School.Chronomancy,
      category: Category.LineOfSight,
      difficulty: 12,
      effect: ''
    })
  }
  public copy() {
    const spell = new Decay()
    spell.difficulty = this.difficulty
    return spell
  }
}
