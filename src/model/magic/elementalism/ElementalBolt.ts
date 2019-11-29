import Spell, { Category, School } from '../Spell'

export default class ElementalBolt extends Spell {
  public readonly type: string = 'elementalbolt'
  constructor() {
    super({
      name: 'Elemental Bolt',
      description:
        'The spellcaster may make an immediate +8 shooting attack against any figure in line of sight',
      school: School.Elementalism,
      category: Category.LineOfSight,
      difficulty: 12,
      effect: ''
    })
  }
  public copy() {
    const spell = new ElementalBolt()
    spell.difficulty = this.difficulty
    return spell
  }
}
