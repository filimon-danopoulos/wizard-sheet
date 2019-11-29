import Spell, { Category, School } from '../Spell'

export default class BlindingLight extends Spell {
  public readonly type: string = 'blindinglight'
  constructor() {
    super({
      name: 'Binding Light',
      description:
        'The target must make an immediate Will roll versus the casting roll. If he fails, he may not attack, shoot, or cast Line of Sight spells. His Fight stat is reduced to +0 and Move to 1. At the start of each turn, the figure may attempt to break the spell by making another Will roll against the same target, otherwise the effects last until the end of the game.',
      school: School.Thaumaturgy,
      category: Category.LineOfSight,
      difficulty: 10,
      effect: ''
    })
  }
  public copy() {
    const spell = new BlindingLight()
    spell.difficulty = this.difficulty
    return spell
  }
}
