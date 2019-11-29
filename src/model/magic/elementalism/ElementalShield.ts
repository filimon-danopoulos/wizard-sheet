import Spell, { Category, School } from '../Spell'

export default class ElementalShield extends Spell {
  public readonly type: string = 'elementalshield'
  constructor() {
    super({
      name: 'Elemental Shield',
      description:
        'The spellcaster forms a floating shield to protect himself. This shield absorbs the next 3 points of damage against the spellcaster from any source. Once 3 points have been absorbed the shield vanishes. A spellcaster may only have one Elemental Shield active at any time. ',
      school: School.Elementalism,
      category: Category.SelfOnly,
      difficulty: 10,
      effect: ''
    })
  }
  public copy() {
    const spell = new ElementalShield()
    spell.difficulty = this.difficulty
    return spell
  }
}
