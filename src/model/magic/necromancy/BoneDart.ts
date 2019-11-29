import Spell, { Category, School } from '../Spell'

export default class BoneDart extends Spell {
  public readonly type: string = 'bonedart'
  constructor() {
    super({
      name: 'Bone Dart',
      description:
        'This spell fires a small, sharp shard of bone at a target. The spellcaster may make an immediate +5 shooting attack against any figure in line of sight. This does not count as a magic attack.',
      school: School.Necromancy,
      category: Category.LineOfSight,
      difficulty: 8,
      effect: ''
    })
  }
  public copy() {
    const spell = new BoneDart()
    spell.difficulty = this.difficulty
    return spell
  }
}
