import Spell, { Category, School } from '../Spell'

export default class ElementalHammer extends Spell {
  public readonly type: string = 'elementalhammer'
  constructor() {
    super({
      name: 'Elemental Hammer',
      description:
        'This spell is cast upon a weapon. The next time this weapon causes at least 1 point of damage, it inflicts an additional 5 points of damage. ',
      school: School.Elementalism,
      category: Category.LineOfSight,
      difficulty: 10,
      effect: ''
    })
  }
  public copy() {
    const spell = new ElementalHammer()
    spell.difficulty = this.difficulty
    return spell
  }
}
