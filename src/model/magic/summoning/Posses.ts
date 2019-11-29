import Spell, { Category, School } from '../Spell'

export default class Posses extends Spell {
  public readonly type: string = 'posses'
  constructor() {
    super({
      name: 'Posses',
      description:
        'This spell may only be cast on a member of the spellcaster’s own warband. The target is possessed by a demon and gains +2 Fight, +2 Armour, and -2 Will for the remainder of the battle and counts as a demon for all intents and purposes (e.g. Banish, Bind Demon). If removed from the game for any reason (such as being hit by a Banish spell), check for the character’s survival as normal. A spellcaster may only have one Possess spell active at a time.',
      school: School.Summoning,
      category: Category.LineOfSight,
      difficulty: 12,
      effect: ''
    })
  }
  public copy() {
    const spell = new Posses()
    spell.difficulty = this.difficulty
    return spell
  }
}
