import Spell, { Category, School } from '../Spell'

export default class WizardEye extends Spell {
  public readonly type: string = 'wizardeye'
  constructor() {
    super({
      name: 'Wizard Eye',
      description:
        'This spell may be cast on any terrain feature within 12” that has a flat side, such as most ruins. Place a token next to the terrain feature to represent the Wizard Eye. For the rest of the game, the spellcaster may choose to draw line of sight from the Wizard Eye instead of from his figure when casting spells. The Wizard Eye has 180-degree field of vision. A spellcaster may only maintain one Wizard Eye at a time.',
      school: School.Soothsaying,
      category: Category.LineOfSight,
      difficulty: 8,
      effect: ''
    })
  }
  public copy() {
    const spell = new WizardEye()
    spell.difficulty = this.difficulty
    return spell
  }
}
