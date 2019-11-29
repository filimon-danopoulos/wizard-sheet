import Spell, { Category, School } from '../Spell'

export default class RevealDeath extends Spell {
  public readonly type: string = 'revealdeath'
  constructor() {
    super({
      name: 'Reveal Death',
      description:
        'This spell causes the target to see a vision of his own death. The target must make an immediate Will roll versus the casting roll. If the target fails, he loses his next activation. ',
      school: School.Necromancy,
      category: Category.LineOfSight,
      difficulty: 12,
      effect: ''
    })
  }
  public copy() {
    const spell = new RevealDeath()
    spell.difficulty = this.difficulty
    return spell
  }
}
