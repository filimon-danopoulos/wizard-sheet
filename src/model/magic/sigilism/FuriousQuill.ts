import Spell, { Category, School } from '../Spell'

export default class FuriousQuill extends Spell {
  public readonly type: string = 'furiousquill'
  constructor() {
    super({
      name: 'Furious Quill',
      description:
        'The target is attacked by a sharp animated quill. Although the quill does no damage, it is highly irritating and extremely distracting. While under attack, the target suffers -1 Move, -2 Fight, -4 Shoot and -2 to any casting rolls. At the start of the target’s activation each turn, he may make a Will roll versus the casting roll – if successful, the quill is caught and destroyed. Multiple castings of Furious Quill against the same target have no effect. This spell may be cast against a figure in combat with no penalty',
      school: School.Sigilism,
      category: Category.LineOfSight,
      difficulty: 10,
      effect: ''
    })
  }
  public copy() {
    const spell = new FuriousQuill()
    spell.difficulty = this.difficulty
    return spell
  }
}
