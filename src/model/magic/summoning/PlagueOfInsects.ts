import Spell, { Category, School } from '../Spell'

export default class PlagueOfInsects extends Spell {
  public readonly type: string = 'plagueofinsects'
  constructor() {
    super({
      name: 'Plague of Insects',
      description:
        'The target figure is attacked by a cloud of stinging or biting insects that irritate and distract. The cloud of insects has a 1” radius centred on, and moving with, the target figure. It affects all figures, including the target figure, fully or partially within this radius. While being pestered by the insects, a figure has -4 Fight and -4 Shoot. The target figure must pass a Will roll versus the original casting roll at the start of his activation in order to beat off all the insects. Other figures within the radius may simply move away to escape. A figure may only ever be affected by one Plague of Insects, whether as a target or by virtue of being within the 1” radius.',
      school: School.Summoning,
      category: Category.LineOfSight,
      difficulty: 12,
      effect: ''
    })
  }
  public copy() {
    const spell = new PlagueOfInsects()
    spell.difficulty = this.difficulty
    return spell
  }
}
