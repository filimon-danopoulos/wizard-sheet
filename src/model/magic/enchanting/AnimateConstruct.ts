import Spell, { Category, School } from '../Spell'

export default class AnimateConstruct extends Spell {
  public readonly type: string = 'animateconstruct'
  constructor() {
    super({
      name: 'Animate Construct',
      description:
        'It is assumed that the spellcaster has built a construct prior to using this spell to animate it. If the spell is successfully cast, the construct immediately becomes a member of the warband, taking the place of a soldier. A spellcaster may declare that he is attempting to animate a construct of any size (Small, Medium or Large – see Chapter 6: Bestiary), but the larger the construct, the harder it is to animate, so the following modifiers are applied to his roll to cast the spell: Small -0, Medium -3, Large -6. ',
      school: School.Enchanting,
      category: Category.OutOfGame,
      difficulty: 8,
      effect: ''
    })
  }
  public copy() {
    const spell = new AnimateConstruct()
    spell.difficulty = this.difficulty
    return spell
  }
}
