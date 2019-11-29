import Spell, { Category, School } from '../Spell'

export default class DrainingWord extends Spell {
  public readonly type: string = 'drainingword'
  constructor() {
    super({
      name: 'Draining Word',
      description:
        'This spell draws a bright rune of power in the sky. The spellcaster may choose one spell for the Draining Word to affect. All rolls to attempt to cast that particular spell are at -3 for the rest of the game. A spellcaster may only have one Draining Word spell in effect at any given time.',
      school: School.Sigilism,
      category: Category.AreaEffect,
      difficulty: 14,
      effect: ''
    })
  }
  public copy() {
    const spell = new DrainingWord()
    spell.difficulty = this.difficulty
    return spell
  }
}
