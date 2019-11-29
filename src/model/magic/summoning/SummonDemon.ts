import Spell, { Category, School } from '../Spell'

export default class SummonDemon extends Spell {
  public readonly type: string = 'summondemon'
  constructor() {
    super({
      name: 'Summon Demon',
      description:
        'If successfully cast, a demon is immediately placed on the table within 1” of the spellcaster. It may not be placed straight into combat. The demon is treated as though it is already subject to a Bind Demon spell. A spellcaster may only have one bound demon at a time. The type of demon summoned depends on the amount by which the spellcaster succeeded on his casting roll: 1–5 Imp, 6–12 Minor Demon, 13+ Major Demon (see Chapter 6: Bestiary). If a spellcaster rolls a 1 while attempting to cast this spell, a demon is placed on the table and immediately attacks the summoner. The type of demon is determined using the same chart as above, but using the amount by which the casting roll was failed.',
      school: School.Summoning,
      category: Category.Touch,
      difficulty: 12,
      effect: ''
    })
  }
  public copy() {
    const spell = new SummonDemon()
    spell.difficulty = this.difficulty
    return spell
  }
}
