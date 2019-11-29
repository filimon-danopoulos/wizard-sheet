import Spell, { Category, School } from '../Spell'

export default class ExplosiveRune extends Spell {
  public readonly type: string = 'explosiverune'
  constructor() {
    super({
      name: 'Explosive Rune',
      description:
        'The spellcaster draws a bright, glowing rune of power on the ground or a wall. A marker should be placed on the table to represent the rune. If any character or creature that was not part of the spellcaster’s warband at the start of the game comes within 1” of the rune, it explodes, and every figure, friend or foe, within 2” suffers an immediate +5 shooting attack. A spellcaster may have up to three such runes in play at any time. At the end of any turn, he may choose to cancel any or all of his runes. If the spellcaster is removed from play, any runes he placed are also removed.',
      school: School.Sigilism,
      category: Category.Touch,
      difficulty: 10,
      effect: ''
    })
  }
  public copy() {
    const spell = new ExplosiveRune()
    spell.difficulty = this.difficulty
    return spell
  }
}
