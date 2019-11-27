import Spell, { Category, School } from '../Spell'

export default class BoneDart extends Spell {
  public readonly type: string = 'bonedart'
  constructor() {
    super({
      name: 'Bone Dart',
      description: '',
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
