import Spell, { Category, School } from '../Spell'

export default class PowerWord extends Spell {
  public readonly type: string = 'powerword'
  constructor() {
    super({
      name: 'Power Word',
      description:
        'This spell draws a bright rune of power in the sky. The spellcaster may pick one spell for the Power Word to affect. All rolls to cast that particular spell are at +3 for every spellcaster for the rest of the game. Each spellcaster may have only one Power Word in effect at any given time.',
      school: School.Sigilism,
      category: Category.AreaEffect,
      difficulty: 14,
      effect: ''
    })
  }
  public copy() {
    const spell = new PowerWord()
    spell.difficulty = this.difficulty
    return spell
  }
}
