import Spell, { Category, School } from '../Spell'

export default class CreateGrimoire extends Spell {
  public readonly type: string = 'creategrimoire'
  constructor() {
    super({
      name: 'Create Grimoire',
      description:
        'This spell allows a spellcaster to create a grimoire containing one spell that he already knows. In order to create a grimoire, the spellcaster must first cast Create Grimoire, and then the spell he wishes to place into the grimoire (even if it is not usually an Out of Game spell). If both are successfully cast, the grimoire is created and the wizard may then sell it.',
      school: School.Sigilism,
      category: Category.OutOfGame,
      difficulty: 12,
      effect: ''
    })
  }
  public copy() {
    const spell = new CreateGrimoire()
    spell.difficulty = this.difficulty
    return spell
  }
}
